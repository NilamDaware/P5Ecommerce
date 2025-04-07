import React from 'react';
import { useParams } from 'react-router-dom';
import './BookDetails.css';

const BookDetails = ({ books }) => {
  const { id } = useParams();
  const book = books.find(b => b._id === id); // Adjust based on how you're passing data

  if (!book) {
    return <div className="book-not-found">Book not found!</div>;
  }

  return (
    <div className="book-details-container">
      <div className="book-image">
        <img src={book.image} alt={book.title} />
      </div>
      <div className="book-info">
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">by {book.author}</p>
        <p className="book-category">{book.category}</p>
        <p className="book-price">₹{book.price}</p>
        <p className="book-description">{book.description}</p>
        <div className="book-actions">
          <button className="btn-buy">Add to Cart</button>
          <button className="btn-wishlist">❤️ Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
