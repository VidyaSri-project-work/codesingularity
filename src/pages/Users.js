import React from "react";
import "./Users.css";

const sampleUsers = [
  { name: "Alice Johnson", feedback: "Amazing service! Deployed my app seamlessly.", stars: 5 },
  { name: "Rahul Sharma", feedback: "Professional team, very fast delivery.", stars: 4 },
  { name: "Sofia Lee", feedback: "Highly recommend for startups wanting branded deployment.", stars: 5 },
  { name: "David Kim", feedback: "Friendly and reliable, great experience.", stars: 4 }
];

function Users() {
  return (
    <section className="users-page">
      <h2>Our Clients & Feedback</h2>
      <p>Trusted by startups and businesses worldwide.</p>

      <div className="user-cards">
        {sampleUsers.map((user, index) => (
          <div key={index} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.feedback}</p>
            <div className="stars">{'★'.repeat(user.stars)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Users;
