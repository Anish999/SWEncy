import React from 'react';
import { Parallax } from 'react-parallax';
import image1 from '../assets/characters1.jpg';
import image3 from '../assets/planets1.jpg';
import image2 from '../assets/wallpaper1.jpg';
import image4 from '../assets/wallpaper2.jpg';
import { Link } from 'react-router-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};

const Home = () => (
  <div style={styles}>
    <h1>SW FANS!</h1>
    <Parallax bgImage={image1} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 600 }}>
        <Link to='/people'>
          <div style={insideStyles}>CHARACTERS</div>
        </Link>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 600 }}>
        <Link to='/planets'>
          <div style={insideStyles}>PLANETS</div>
        </Link>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image2} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Under Construction!</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image4} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Coming Soon!</div>
      </div>
    </Parallax>
    <div style={{ height: 500 }} />
    <h2>{'\u2728'}</h2>
  </div>
);

export default Home;
