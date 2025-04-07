// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
// import './LoginSignup.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPass, setShowPass] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/users/login', {
//         email,
//         password
//       });
//       alert(res.data.message);
//       navigate('/');
//     } catch (err) {
//       alert(err.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2 className="login-title">🔐 Welcome Back to BookNest</h2>
//       <form onSubmit={handleLogin} className="login-form">
//         <div className="login-input-group">
//           <FaEnvelope className="login-input-icon" />
//           <input
//             className="login-input"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="login-input-group">
//           <FaLock className="login-input-icon" />
//           <input
//             className="login-input"
//             type={showPass ? 'text' : 'password'}
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             required
//           />
//           {showPass ? (
//             <FaEyeSlash className="login-toggle-icon" onClick={() => setShowPass(false)} />
//           ) : (
//             <FaEye className="login-toggle-icon" onClick={() => setShowPass(true)} />
//           )}
//         </div>
//         <button className="login-button" type="submit">Login</button>
//       </form>
//       <p className="login-link">
//         Don’t have an account? <Link to="/signup">Sign up here</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import './LoginSignup.css'; // Shared CSS file with scoped styles for login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password
      });
      alert(res.data.message);
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">🔐 Welcome Back to BookNest</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="login-input-group">
            <FaEnvelope className="login-input-icon" />
            <input
              className="login-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-input-group">
            <FaLock className="login-input-icon" />
            <input
              className="login-input"
              type={showPass ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            {showPass ? (
              <FaEyeSlash className="login-toggle-icon" onClick={() => setShowPass(false)} />
            ) : (
              <FaEye className="login-toggle-icon" onClick={() => setShowPass(true)} />
            )}
          </div>
          <button className="login-button" type="submit">Login</button>
        </form>
        <p className="login-link">
          Don’t have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
