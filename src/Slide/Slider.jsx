import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AnotherReactScreen1 from './AnotherReactScreen1';
import AnotherReactScreen2 from './AnotherReactScreen2';
// Import the additional React screens/components you want to render

const Slide = () => {
  // Define the React screens/components to be embedded
  const reactScreens = [
    <AnotherReactScreen1 />,
    <AnotherReactScreen2 />,
    // Add additional React screens/components here
  ];

  // Configure the settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full">
        <Slider {...sliderSettings}>
          {reactScreens.map((screen, index) => (
            <div key={index}>{screen}</div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
