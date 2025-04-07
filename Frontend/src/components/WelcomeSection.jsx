
import React from 'react';

const WelcomeSection = () => {
  return (
    <div style={{
      padding: '40px 20px 20px',
      backgroundColor: '#f4f4f4',
      textAlign: 'center',
      borderBottom: '1px solid #ccc'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>📚 Welcome to BookNest</h1>
      <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '16px', color: '#555' }}>
        Discover a world of books across various genres. Explore your next favorite novel, textbook, or tale from our carefully curated collection.
      </p>
    </div>
  );
};

export default WelcomeSection;
