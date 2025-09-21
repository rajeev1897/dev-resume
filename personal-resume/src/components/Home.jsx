import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-root">
      <div className="home-left">
        <h2 className="home-name">Alejandro <span className="highlight">Abeyta</span></h2>
        <div className="home-contact">
          <div>E: alejandroa@gmail.com</div>
          <div>T: +1 (234) 567 80 98</div>
        </div>
      </div>
      <div className="home-center">
        <p className="home-intro">
          Hello, I’m <span className="highlight">Alejandro Abeyta</span>, UX/UI Designer and Front-end Developer Based in San Francisco.
        </p>
        <h1 className="home-cool">
          I code cool <span className="highlight">websites</span>
        </h1>
      </div>
      {/* Social links and other elements can be added here */}
    </div>
  );
};

export default Home;
