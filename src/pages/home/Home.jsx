import React from "react";
import Navbar from "../../components/navbar/Navbar";
import bannerImage from "../../assets/main.jpg";
import secondaryImage from "../../assets/sub.jpg";
import circleText from "../../assets/circle-text.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import "./home.css";

function Home() {
  const listItems = [
    { label: 'LOGO & BRANDING', icon: '+' },
    { label: 'WEB DESIGN', icon: '+' },
    { label: 'UI & UX DESIGN', icon: '+' },
    { label: 'MARKETING & SEO', icon: '+' },
  ];

  return (
    <div className="home">
      <Navbar />
      <div className="header">
        <div className="column-1">
          <h1>QUALITY DIGITAL SERVICES FOR YOU</h1>
          <ul className="list">
            {listItems.map((item, index) => (
              <li key={index}>
                <span>{item.label}</span>
                <FontAwesomeIcon icon={faPlus} size="xs" />
              </li>
            ))}
          </ul>
        </div>
        <div className="column-2">
          <div className="banner">
            <img src={bannerImage} alt="Banner" />
          </div>
        </div>
        <div className="column-3">
          <div className="secondary-image">
            <img src={secondaryImage} alt="Secondary" />
            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <img src={circleText} alt="CircleText" className="circle-text"/>
        </div>
      </div>
      <div className="about">
        <h3>Why Choose Us?</h3>
        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been the industry</p>
      </div>
      <div class="footer">
        <div class="social-links">
          <div class="scroll-down">
            <i class="fa fa-angle-down"><FontAwesomeIcon icon={faArrowDown} /></i>
            <span>Scroll down</span>
          </div>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
          <a href="/">Linkedin</a>
        </div>
      </div>
    </div>
  );
}

export default Home;