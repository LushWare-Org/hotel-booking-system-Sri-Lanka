import React from 'react';
import './HomeExperience.css';
import PropTypes from 'prop-types';

const experiences = [
  {
    title: 'Luxury Nature Rooms',
    description:
      'Experience ultimate comfort in our elegantly designed luxury nature rooms, with the serene beauty of the surrounding greenery.',
    imageUrl: 'https://i.postimg.cc/zDTL0v3d/luxury-architecture-exterior-design_23-2151920919.jpg',
  },
  {
    title: 'Whispering Falls Sanctuary',
    description:
      'Lose yourself in the enchanting beauty of nature’s masterpiece a breathtaking waterfall cascading into crystal-clear pools.',
    imageUrl: 'https://i.postimg.cc/BQfvWbTy/pexels-keshanvidu95-4185785.jpg',
  },
  {
    title: 'Exclusive Dining Experiences',
    description:
      'Savor gourmet meals in breathtaking locations – from private beaches to secluded spots in the heart of the island’s lush paradise.',
    imageUrl:
      'https://i.postimg.cc/QNB4TxWf/Screenshot_2025-03-02_135803.png',
  },
  {
    title: 'Timeless Spiritual Journeys',
    description:
      'Step into the heart of Sri Lanka’s cultural and spiritual heritage, where ancient Buddhist temples and sacred sites tell stories of wisdom.',
    imageUrl:
      'https://i.postimg.cc/vZSXBJHJ/pexels-chathura-anuradha-subasinghe-599124-13667946.jpg',
  },
];

const HomeExperience = ({ inView }) => {
  return (
    <div className="experience-container">
      {experiences.map((experience, index) => (
        <div
          className={`experience-block block-${index} ${inView ? 'in-view' : ''}`}
          key={index}
        >
          <div
            className="experience-image"
            style={{ backgroundImage: `url(${experience.imageUrl})` }}
          >
            <h2 className="experience-title">{experience.title}</h2>
            <div className="hover-overlay">
              <p className="experience-description">{experience.description}</p>
              <button className="discover-button">DISCOVER MORE</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

HomeExperience.propTypes = {
  inView: PropTypes.bool.isRequired,
};

export default HomeExperience;