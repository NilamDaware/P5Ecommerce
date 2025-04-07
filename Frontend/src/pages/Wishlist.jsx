// // src/pages/Wishlist.jsx
// import React, { useEffect, useState } from 'react';
// import './Wishlist.css';

// const Wishlist = () => {
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(storedWishlist);
//   }, []);

//   const handleRemove = (id) => {
//     const updatedWishlist = wishlist.filter(book => book._id !== id);
//     setWishlist(updatedWishlist);
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//   };

//   if (wishlist.length === 0) {
//     return <div className="wishlist-empty">Your wishlist is empty!</div>;
//   }

//   return (
//     <div className="wishlist-container">
//       <h2>Your Wishlist</h2>
//       <div className="wishlist-grid">
//         {wishlist.map(book => (
//           <div key={book._id} className="wishlist-card">
//             <img src={book.image} alt={book.name} className="wishlist-img" />
//             <h4>{book.name}</h4>
//             <p>₹{book.price}</p>
//             <button className="remove-btn" onClick={() => handleRemove(book._id)}>
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;


// src/pages/Wishlist.jsx
import React, { useEffect, useState } from 'react';
import './Wishlist.css';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const handleRemove = (id) => {
    const updatedWishlist = wishlist.filter(book => book._id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleMoveToCart = (book) => {
    // Add to cart
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex(item => item._id === book._id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...book, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Remove from wishlist
    handleRemove(book._id);

    alert("Book moved to cart!");
  };

  if (wishlist.length === 0) {
    return <div className="wishlist-empty">Your wishlist is empty!</div>;
  }

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      <div className="wishlist-grid">
        {wishlist.map(book => (
          <div key={book._id} className="wishlist-card">
            <img src={book.image} alt={book.name} className="wishlist-img" />
            <h4>{book.name}</h4>
            <p>₹{book.price}</p>
            <button className="move-btn" onClick={() => handleMoveToCart(book)}>Move to Cart</button>
            <button className="remove-btn" onClick={() => handleRemove(book._id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
