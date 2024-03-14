import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/styles.css";

const Joke = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get('https://icanhazdadjoke.com/', {
          headers: { Accept: 'application/json' }
        });
        setJoke(response.data.joke);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJoke();
  }, []);

  return (
    <div className="joke-container">
      <p>Joke: "{joke}" 😊</p>
    </div>
  );
};

export default Joke;
