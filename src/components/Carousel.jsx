import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import cover_1 from '../assets/Covers/cover-1.jpg'
import cover_2 from '../assets/Covers/cover-2.jpg'
import cover_3 from '../assets/Covers/cover-3.jpg'



const Carousel = () => {
  return (
    <AwesomeSlider animation="cubeAnimation" className=' rounded'> 
    <div className=''   data-src={cover_2}></div>
    <div className=''  data-src={cover_1}></div>
    <div className=''   data-src={cover_3}></div>
  </AwesomeSlider>
  );
};

export default Carousel;