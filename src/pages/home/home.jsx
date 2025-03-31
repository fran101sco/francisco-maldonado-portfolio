import React from 'react'
import Profile from '../../assets/home.jpeg';
import {Link} from 'react-router';
import { RiArrowRightLine } from "react-icons/ri";
import './home.css';


const home = () => {
  return (
    <section className="home-container grid">
      <img src={Profile} alt='' className='home-img'/>

      <div className="home-content">
        <h1 className="home-title"><span>Francisco Maldonado</span> <br /> Web Designer</h1>
        <p className='home-description'> Soy un diseñador web fullstack apasionado por crear experiencias digitales intuitivas y visualmente impactantes. Mi enfoque combina funcionalidad y diseño para ofrecer interfaces atractivas y fáciles de usar </p>

        <Link to='/about' className='button'>
          Más sobre mi
          <span className='button-icon'>
          <RiArrowRightLine />
          </span>
        </Link>
      </div>
      <div className='color-block'></div>
    </section>
  )
}

export default home