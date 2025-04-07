import React from 'react';
import './CategoryBar.css';

const categories = [
  'Fiction',
  'Non-fiction',
  'Romance',
  'Mystery',
  'Science',
  'Fantasy',
  'Biography',
  'Children',
  'Horror',
  'History',
  'Other' 
];

function CategoryBar({ onCategorySelect }) {
  return (
    <div className="category-bar">
      {categories.map((cat, index) => (
        <button key={index} className="category-btn" onClick={() => onCategorySelect(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
