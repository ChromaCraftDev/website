
import React, { useState } from 'react';
import './Accordion.css'; // Import your CSS file for styling

const faqData = [
  { question: 'What is ChromaCraft?', answer: 'ChromaCraft is a platform for creating personalized wallpapers and app themes for PC.' },
  { question: 'How do I use ChromaCraft?', answer: 'Simply visit our website, select your desired options, and generate your custom designs!' },
  { question: 'Is ChromaCraft free to use?', answer: 'ChromaCraft offers both free and premium subscription plans with additional features.' },
];

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      <h2 className="accordion-title">Frequently Asked Questions</h2>
      <div className="accordion-items">
        {faqData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <h3 className="accordion-question">{item.question}</h3>
              <span className={`accordion-icon ${activeIndex === index ? 'active' : ''}`}></span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                <p className="accordion-answer">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export default Accordion;