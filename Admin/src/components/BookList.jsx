// F:/BookStore/Admin/src/components/BookList.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BookList.css";

function BookList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/books");
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/delete/${id}`);
      setBooks(books.filter((book) => book._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="book-list">
      <h3>All Books</h3>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="book-grid">
          {books.map((book) => (
            <div className="book-card" key={book._id}>
              {book.image && (
                <img
                  src={`http://localhost:5000/uploads/${book.image}`}
                  alt={book.name}
                />
              )}
              <h4>{book.name}</h4>
              <p><strong>Category:</strong> {book.category}</p>
              <p><strong>₹{book.price}</strong></p>
              <button onClick={() => handleDelete(book._id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookList;
