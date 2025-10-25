import React from 'react';
import './FAQ.css';

const faqItems = [
  {
    question: "What is hypnotherapy?",
    answer: `Hypnotherapy is one of the psychotherapy methods that uses hypnosis to change beliefs, feelings, and/or behaviours. Hypnosis is an altered state of consciousness...`
  },
  {
    question: "What is cognitive behavioural therapy?",
    answer: `Cognitive behavioural therapy (CBT) is a collaborative short-term treatment with a problem-oriented focus that aims to modify maladaptive thoughts/beliefs and behaviours into positive/balanced ones...`
  },
  {
    question: "Will I be controlled by the therapist during hypnotherapy?",
    answer: `No, you are in control the whole time. At any point during the hypnosis session, you are always in control...`
  },
  {
    question: "Will I be 'stuck' in hypnosis?",
    answer: `Hypnosis is a very relaxing state and at times it can be too relaxing that you simply doze off...`
  },
];

const FAQ = () => (
  <div className="faq-page">
    <h1 className="faq-title">FAQ</h1>
    <div className="faq-grid">
      {faqItems.map((faq, idx) => (
        <div className="faq-item" key={idx}>
          <h2 className="faq-question">{faq.question}</h2>
          <p className="faq-answer">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FAQ;
