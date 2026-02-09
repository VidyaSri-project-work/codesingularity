import React from "react";
import "./FAQ.css";

const faqs = [
  { q: "Can my app or website be deployed under my company name?", a: "Yes! All apps and websites we create are deployed under your brand identity. Your clients will never see our company name." },
  { q: "Do you provide AI integration for apps?", a: "Absolutely! We offer AI-powered features like automation, predictive analytics, and intelligent recommendations to make your app smarter." },
  { q: "How long does a typical deployment take?", a: "Most projects are deployed within 1–2 weeks, depending on complexity. We ensure fast and smooth delivery without compromising quality." },
  { q: "Can I request a custom design for my app or website?", a: "Yes! Every app or website is fully customized to match your branding, colors, and unique business requirements." },
  { q: "Do you provide post-deployment support?", a: "Yes. We offer post-deployment support, updates, and maintenance to ensure your app runs smoothly." },
  { q: "Is my data secure during development and deployment?", a: "Absolutely. We follow strict security standards and protocols to protect your business data at every stage." },
  { q: "Can I track the progress of my project?", a: "Yes! We provide regular updates and demos so you can track progress and provide feedback during development." },
  { q: "What platforms do you support?", a: "We build web apps, mobile apps (iOS & Android), and cloud solutions depending on your business needs." },
  { q: "Can you integrate third-party tools or APIs?", a: "Yes! We can integrate payment gateways, CRMs, analytics, AI APIs, and other third-party services seamlessly." },
  { q: "Do you offer consultation before starting a project?", a: "Yes! We provide a free consultation to understand your business, goals, and the best technical approach for your project." }
];

function FAQ() {
  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <h3 className="question">{item.q}</h3>
            <p className="answer">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
