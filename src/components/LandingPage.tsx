import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <section id="home">
        <h2>Welcome to Crypto Tracker</h2>
        <p>Track your favorite cryptocurrencies in real-time.</p>
      </section>
      <section id="features">
        <h2>Features</h2>
        <ul>
          <li>Real-time crypto data</li>
          <li>Create custom crypto lists</li>
          <li>Detailed analytics</li>
        </ul>
      </section>
      <section id="about">
        <h2>About Us</h2>
        <p>
          We provide accurate and up-to-date information on cryptocurrencies.
        </p>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: support@cryptotracker.com</p>
      </section>
    </div>
  );
};

export default LandingPage;
