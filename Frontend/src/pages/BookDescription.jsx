


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BookDescription.css';

const BookDescription = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/books/${id}`);
        setBook(res.data);
      } catch (err) {
        console.error('Error fetching book:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex(item => item._id === book._id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...book, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Book added to cart!");
  };

  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.find(item => item._id === book._id);

    if (!exists) {
      wishlist.push(book);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Book added to wishlist!");
    } else {
      alert("Already in wishlist!");
    }
  };

  if (loading) return <p className="loading">Loading book details...</p>;
  if (!book) return <p className="error">Book not found!</p>;

  return (
    <div className="book-desc-container">
      <div className="book-desc-card">
        <div className="book-desc-image">
          <img src={book.image} alt={book.name} />
        </div>
        <div className="book-desc-details">
          <h2 className="book-title">{book.name}</h2>
          <p className="book-author"><strong>Author:</strong> {book.author || "Unknown Author"}</p>
          <p className="book-category"><strong>Category:</strong> {book.category}</p>
          <p className="book-price"><strong>Price:</strong> ₹{book.price}</p>
          <p className="book-description"><strong>Description:</strong> {book.description}</p>

          <div className="book-buttons">
            <button className="btn btn-cart" onClick={handleAddToCart}>🛒 Add to Cart</button>
            <button className="btn btn-wishlist" onClick={handleAddToWishlist}>❤️ Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDescription;
