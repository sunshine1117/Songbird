import React from 'react';
import H1 from './components/H1';

const App = () => {
  return (
    <>
      <H1 title="Hello, birds! Let's find what bird's voice is?" />
      <img src="../assets/images/p.jpg" alt="travel" />
      <svg>
        <use xlinkHref="../assets/images/sprites/sprite.svg#emojis" />
      </svg>
    </>
  );
};

export default App;
