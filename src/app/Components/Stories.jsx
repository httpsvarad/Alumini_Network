import React from 'react';
import { FaUserTie, FaShopify, FaAws } from 'react-icons/fa'; // Using more specific icons

const testimonials = [
  {
    icon: <FaUserTie size={60} color="#083d3d" />, // Businessperson icon
    text: "As a leading payment processing itemsplatform, integrating with GreenBank has been instrumental in enhancing our offerings to businesses worldwide. GreenBank's commitment to innovation and user-centric design aligns seamlessly with our mission to simplify online payments. Highly Recommended.",
    name: "MIKE PATEL",
    title: "CEO, PAYBANKS",
    bgColor: "#f7f7e7",
    textColor: "#083d3d",
  },
  {
    icon: <FaShopify size={60} color="white" />, // Shopify icon
    text: "Integrating GreenBank's banking services into our platform has significantly enhanced the financial capabilities we offer to our merchants. With GreenBank's seamless API integration, our merchants can manage their finances directly from their dashboard, improving their efficiency.",
    name: "JACK DORSEY",
    title: "CTO, SHOPY",
    bgColor: "#32d18c",
    textColor: "white",
  },
  {
    icon: <FaAws size={60} color="#083d3d" />, // AWS cloud icon
    text: "GreenBank's integration with our AWS platform has revolutionized how businesses manage their finances in the cloud. With GreenBank's scalable banking solutions and secure API integration, our customers can seamlessly manage their banking operations within their AWS environment.",
    name: "ANDY JASSY",
    title: "CFO, CLOUDY",
    bgColor: "#ccf5eb",
    textColor: "#083d3d",
  },
];

export default function CustomerStories() {
  return (
    <div style={{ backgroundColor: 'white', padding: '4rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#083d3d' }}>
          Customer <span style={{ color: '#32d18c' }}>Stories</span>
        </h1>
        <p style={{ color: '#6b7280', marginTop: '1rem' }}>
          Discover what our satisfied customers have to say about their experiences with GreenBank.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={{
            padding: '2rem',
            borderRadius: '12px',
            width: '24%',
            height:"60vh",
            borderRadius:"3rem",
            display:"flex",
            flexDirection:"column",
            backgroundColor: testimonial.bgColor,
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              {testimonial.icon} {/* Display the appropriate icon */}
            </div>
            <p style={{ color: testimonial.textColor, fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              {testimonial.text}
            </p>
            <h3 style={{ color: testimonial.textColor, fontWeight: 'bold', fontSize: '1.125rem' }}>
              {testimonial.name}
            </h3>
            <p style={{ color: testimonial.textColor, fontSize: '0.875rem' }}>
              {testimonial.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
