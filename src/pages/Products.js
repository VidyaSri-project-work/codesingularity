import React from "react";
import "./Products.css";

function Products() {
  const products = [
    { title: "Web Development", desc: "Responsive, fast, scalable websites." },
    { title: "AI Solutions", desc: "Smart automation and predictions." },
    { title: "Cloud Services", desc: "Reliable and secure cloud infrastructure." },
  ];

  return (
    <section className="products">
      <h2>Our Solutions</h2>
      <div className="product-grid">
        {products.map((p,i)=>(
          <div key={i} className="product-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
