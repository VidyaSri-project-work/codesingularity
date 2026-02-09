import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupModal from "../components/SignupModal";
import "./Home.css";

function Home() {
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate(); // useNavigate hook

  return (
    <section className="home">
      <div className="hero">
        <h1>Welcome to Code Singularity AI Pvt. Ltd</h1>
        <p>
          We help startups and businesses deploy their apps and websites under their own brand.
          Your vision, your brand, fully powered by our professional team.
        </p>

        <div className="hero-buttons">
          <button className="get-started-btn" onClick={() => setShowSignup(true)}>
            Get Started
          </button>
          <button className="learn-more-btn" onClick={() => navigate("/about")}>
            Learn More
          </button>
        </div>
      </div>

      {showSignup && <SignupModal closeModal={() => setShowSignup(false)} />}
    </section>
  );
}

export default Home;
