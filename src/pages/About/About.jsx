import React from 'react';
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import aboutData from '../../data/about.json';
import aboutBannerImage from '/assets/about-banner.png';
import '../About/About.scss';

const About = () => {
  return (
    <div className="about-page">
      <Banner 
        image={aboutBannerImage} 
        className="about-banner"
      />
      <div className="collapse-container">
        {aboutData.map((item, index) => (
          <Collapse 
            key={`collapse-${index}`}
            title={item.title}
          >
            {Array.isArray(item.content) ? (
              <ul>
                {item.content.map((point, pointIndex) => (
                  <li key={`point-${index}-${pointIndex}`}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>{item.content}</p>
            )}
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default About;