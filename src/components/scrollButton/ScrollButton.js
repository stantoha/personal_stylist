import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import arrowup from './arrowup.png';
import './scrollButton.scss'; // assuming you have a CSS file for styling

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledHeight = window.pageYOffset || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      setIsVisible(scrolledHeight > viewportHeight/2);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className={`scroll-button shadow shadow-3 ${isVisible ? 'scroll-button_visible' : 'scroll-button_hidden'}`} onClick={scrollToTop}>
        <Image src={arrowup} className='scroll-button_img'></Image>
    </button>
  );
};

export default ScrollButton;
