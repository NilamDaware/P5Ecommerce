
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPanel.css";

function AdminPanel() {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    category: "",
    description: "",
    price: "",
    image: null,
  });

  const [books, setBooks] = useState([]);

  const categories = [
    "Fiction", "Non-fiction", "Comics", "Romance",
    "Science", "History", "Fantasy", "Horror", "Other"
  ];

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/books");
      setBooks(res.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post("http://localhost:5000/api/books/add", data);
      alert("Book added successfully");
      setFormData({
        name: "",
        author: "",
        category: "",
        description: "",
        price: "",
        image: null,
      });
      fetchBooks();
    } catch (error) {
      console.error("Add error:", error);
      alert("Failed to add book.");
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/delete/${id}`);
      fetchBooks();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="admin-container">
      <header className="admin-navbar">📚 BookNest Admin Panel</header>

      <div className="admin-layout">
        <aside className="sidebar">
          <h2>Admin Panel</h2>
          <nav>
            <ul>
              <li><a href="#add-book">➕ Add Book</a></li>
              <li><a href="#uploaded-books">📚 Uploaded Books</a></li>
            </ul>
          </nav>
        </aside>

        <main className="admin-panel">
          <div className="upload-section" id="add-book">
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit} className="upload-form">
              <input type="text" name="name" placeholder="Book Name" onChange={handleChange} value={formData.name} required />
              <input type="text" name="author" placeholder="Author Name" onChange={handleChange} value={formData.author} required />
              <select name="category" onChange={handleChange} value={formData.category} required>
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <input type="text" name="description" placeholder="Description" onChange={handleChange} value={formData.description} required />
              <input type="text" name="price" placeholder="Price" onChange={handleChange} value={formData.price} required />
              <input type="file" name="image" onChange={handleChange} accept="image/*" required />
              <button type="submit">Add Book</button>
            </form>
          </div>

          <div className="uploaded-section" id="uploaded-books">
            <h2>Uploaded Books</h2>
            <div className="book-list">
              {books.map((book) => (
                <div className="book-row" key={book._id}>
                  <span><strong>{book.name}</strong></span>
                  <span>₹{book.price}</span>
                  <button onClick={() => deleteBook(book._id)}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminPanel;
