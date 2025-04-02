import Collapse from "../../components/Collapse/Collapse";
import aboutData from '../../data/about.json'; 
import '../About/About.scss';

const About = () => {
  return (
    <div className="about-page">
      <div className="banner-about"></div>
      <div className="collapse-container">
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title}>
            <p>{item.content}</p>
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default About;