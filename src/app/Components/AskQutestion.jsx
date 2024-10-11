"use client"
import { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does Green Bank ensure the security of my connected bank account?",
      answer: "We use bank-level encryption and secure authentication processes to protect your account."
    },
    {
      question: "Can I connect multiple bank accounts to the Green Bank app?",
      answer: "Yes, Green Bank allows you to connect and manage multiple accounts."
    },
    {
      question: "How long does it take for transactions to appear in my Green Bank app?",
      answer: "Transactions typically appear within a few minutes."
    },
    {
      question: "Are there any fees associated with using the Green Bank app?",
      answer: "Green Bank is free to use. There are no hidden fees."
    },
    {
      question: "What features does the Green Bank app offer besides transaction tracking?",
      answer: "The app provides budgeting tools, spending insights, and more."
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-2">Answers to Your</h2>
        <h3 className="text-4xl font-bold text-green-400 mb-6">Questions</h3>
        <p className="text-lg text-gray-600 mb-10">
          Get answers to commonly asked questions about GreenBank and its features.
        </p>
        <button className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-full">
          Contact Us
        </button>
      </div>

      <div className="mt-12">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 mb-4 cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-medium text-gray-800">{faq.question}</h4>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
