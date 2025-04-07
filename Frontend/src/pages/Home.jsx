import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

function Home() {
  const [books, setBooks] = useState([]);

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

  const categories = [
    "Fiction", "Non-fiction", "Comics", "Romance",
    "Science", "History", "Fantasy", "Horror", "Other"
  ];

  return (
    <div className="home-container">
      {/* Hero / Welcome Section */}
      <section className="hero-section">
        <h1>Welcome to BookNest 📚</h1>
        <p>Discover your next favorite read from a variety of genres. Happy Reading!</p>
      </section>

      {/* Category Section */}
      <section className="category-section">
        <h2>Categories</h2>
        <div className="category-list">
          {categories.map((cat) => (
            <button key={cat} className="category-btn">{cat}</button>
          ))}
        </div>
      </section>

      {/* All Books Section */}
      <section className="all-books-section">
        <h2>All Books</h2>
        <div className="book-grid">
          {books.map((book) => (
            <div className="book-card" key={book._id}>
              <img
                src={`http://localhost:5000/uploads/${book.image}`}
                alt={book.name}
                className="book-img"
              />
              <h3>{book.name}</h3>
              <p>₹{book.price}</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

