// Sidebar.jsx

import React, { useState, useEffect } from 'react';
import styles from './sidebar.module.css'; // Import CSS module for styling

const Sidebar = () => {
  // State to track whether sidebar should be sticky
  const [isSticky, setIsSticky] = useState(false);

  // Effect to add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) { // Adjust 100 as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.sidebar} ${isSticky ? styles.sticky : ''}`}>
      {/* Sidebar content goes here */}
      {/* For example: <ul><li>Link 1</li><li>Link 2</li></ul> */}
    </div>
  );
};

export default sidebar;
