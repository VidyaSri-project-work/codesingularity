import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <h2>About Code Singularity AI Pvt. Ltd</h2>
      <p>
        We help startups and businesses deploy their apps and websites under **their own brand identity**.  
        From design to deployment, we ensure your product looks professional and works seamlessly.
      </p>

      <div className="about-cards">
        <div className="card">
          <h3>Our Mission</h3>
          <p>Empower businesses with smart, branded technology solutions without losing their identity.</p>
        </div>

        <div className="card">
          <h3>Our Vision</h3>
          <p>To be the most trusted partner for startups to launch, deploy, and scale digital products globally.</p>
        </div>

        <div className="card">
          <h3>Why Choose Us?</h3>
          <p>Professional deployments, fast turnaround, and technology solutions tailored to your brand.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
