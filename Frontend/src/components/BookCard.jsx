
import React from 'react';
import './BookCard.css';
import { useNavigate } from 'react-router-dom';

function BookCard({ book }) {
  const navigate = useNavigate();

  const goToBookDetail = () => {
    navigate(`/book/${book._id}`);
  };

  return (
    <div className="book-card" onClick={goToBookDetail}>
      <img src={book.image} alt={book.name} className="book-image" />
      <h3 className="book-title">{book.name}</h3>
      <p className="book-price">₹{book.price}</p>
      <button 
        className="buy-button" 
        onClick={(e) => { 
          e.stopPropagation(); 
          goToBookDetail(); 
        }}
      >
        Buy
      </button>
    </div>
  );
}

export default BookCard;
