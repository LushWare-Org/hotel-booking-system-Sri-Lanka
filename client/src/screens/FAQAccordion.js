import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaChevronDown } from 'react-icons/fa'; 

const FAQAccordion = () => {
  const [expanded, setExpanded] = useState(null); 
  const [hoveredIndex, setHoveredIndex] = useState(null); 
  const { ref, inView } = useInView({
    threshold: 0.1, 
    triggerOnce: false, 
  });

  const faqs = [
    {
      question: "How do I get to the LushGlow Haven Resort?",
      answer: "Luxury Hotel is about 25 minutes from the airport. You can hail an Uber or even book your airport transfer in advance for an additional charge of 98 USD.",
    },
    {
      question: "What are check-in and check-out times at LushGlow Haven Resort?",
      answer: "Check-in Time: 1:00 pm | Check-out Time: 12:00 noon. Early Arrivals: Guests arriving before 12 noon are encouraged to reserve and pay for the previous night to guarantee immediate access to their room. Early Departures: For guests departing earlier than planned, especially during peak occupancy periods, a 100% charge on the remaining room nights will apply. Late Departures: Check-out by 04:00 pm incurs a 50% charge for the day. Departures after 04:00 pm will be subject to a full day's charge.",
    },
    {
      question: "What are popular tourist attractions near LushGlow Haven Resort?",
      answer: "Galle Face Green, Gangaramaya Temple, Viharamahadevi Park, Colombo National Museum, Independence Memorial Hall, Dutch Hospital Shopping Precinct, Beira Lake",
    },
    {
      question: "What is the smoking policy at LushGlow Haven Resort?",
      answer: "To ensure a pleasant and healthy environment for all our guests, certain floors within our hotel are designated as smoking floors, offering dedicated smoking rooms. Smoking is only permitted in these designated areas.",
    },
    {
      question: "What popular shopping places are close to LushGlow Haven Resort?",
      answer: "One Galle Face Shopping Mall, Colombo City Centre, Pettah Market",
    },
  ];

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 ">
      <h2
        ref={ref}
        className={`text-4xl md:text-5xl font-bold text-left font-sans text-black mb-8 ml-10 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-2 rounded-lg overflow-hidden shadow-md bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <button
              onClick={() => handleToggle(index)}
              className={`w-full flex justify-between items-center p-4 text-black text-lg md:text-xl font-semibold transition-colors duration-300 ${hoveredIndex === index || expanded === index ? 'bg-amber-300' : 'bg-transparent'}`}
            >
              <span>{faq.question}</span>
              <FaChevronDown
                className={`text-yellow-500 transition-transform duration-300 ${expanded === index ? 'rotate-180' : ''}`}
              />
            </button>

            {expanded === index && (
              <div className="p-4 bg-amber-50 text-black text-base md:text-lg rounded-b-lg transition-all duration-300 ease-in-out">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;