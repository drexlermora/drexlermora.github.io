import React from 'react';

const Home = () => {
  return (
    <section id="home" className="home-section text-center">
      <div className="overlay">
        <img
          src="/assets/skills/2x2.jpg"
          className="round-image"
        />
        <div className="mirror">
          <h1 className="text-uppercase">Hi, I'm Drexler</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
