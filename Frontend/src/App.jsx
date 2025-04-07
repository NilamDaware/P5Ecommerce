
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import BookCard from './components/BookCard';


function App() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchBooks();
  }, [selectedCategory]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/books');
      const allBooks = res.data;
      const filteredBooks = selectedCategory === 'All'
        ? allBooks
        : allBooks.filter(book => book.category === selectedCategory);

      setBooks(filteredBooks);
    } catch (err) {
      console.error('Error fetching books:', err);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
   
      <Navbar />

    
      <CategoryBar onCategorySelect={handleCategorySelect} />

      
      <div style={{
        padding: '40px 20px',
        backgroundColor: '#f5f5f5',
        textAlign: 'center'
      }}>
        <h1>📚 Welcome to BookNest</h1>
        <p style={{
          maxWidth: '600px',
          margin: '10px auto',
          fontSize: '16px',
          color: '#333'
        }}>
          Discover a world of books across various genres. Dive into your next adventure, romance, thriller, or favorite novel today.
        </p>
      </div>

     
      <div style={{ padding: '30px' }}>
        <h2 style={{ marginBottom: '20px' }}>Books in "{selectedCategory}" Category</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center'
        }}>
          {books.map(book => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
