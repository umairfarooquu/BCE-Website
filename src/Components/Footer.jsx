import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/images/Brand-logo.png';
import frame1 from "../Assets/images/Frames/Frame 6748.png";
import frame2 from "../Assets/images/Frames/Frame 6749.png";
import frame3 from "../Assets/images/Frames/Frame 6750.png";

import './Footer.css';

function Footer() {
  return (
    <>
     <div className='container'>
      <div className="row p-5 text-light maincontainer">
        <div className="col-md-3">
          <img className="img-fluid"  style={{  filter: 'brightness(0) invert(1)' }} src={logo} alt="logo" />
          <p className="text-sm">
            Where we drive your <br /> insurance needs forward!
          </p>
        </div>

        <div className="col-md-2">
          <b className="mt-3 d-block d-md-inline">Home</b>
          <ul className="list-unstyled">
            <li className="mt-3">Services</li>
            <li className="mt-3">About</li>
            <li className="mt-3">Contact us</li>
            <li className="mt-3">Blog</li>
          </ul>
        </div>
        <div className="col-md-2">
          <b className="mt-3 d-block d-md-inline">About Us</b>
          <ul className="list-unstyled">
            <li className="mt-3">Term & Condition</li>
            <li className="mt-3">Privacy Policy</li>
          </ul>
        </div>
        <div className="col-md-4">
          <b className="mt-3 d-block d-md-inline">Contact</b>
          <ul className="list-unstyled" style={{ fontSize: 'small' }}>
            <li className="mt-2">
              <i className="fa-solid fa-location-dot" style={{ color: "#f9fafa" }}></i> &nbsp;&nbsp;&nbsp;66 Waverley Dr. Ste 630, Frederick, MD 21702
            </li>
            <li className="mt-2">
              <i className="fa-regular fa-envelope-open" style={{ color: "#f9fafa" }}></i> &nbsp;&nbsp;&nbsp;Operations@bceins.com
            </li>
            <li className="mt-2">
              <i className="fa-solid fa-phone" style={{ color: "#f9fafa" }}></i> &nbsp;&nbsp;&nbsp;301-591-6550
            </li>
          </ul>
        </div>
        <div className='col-md-1 d-flex align-items-center justify-content-center'>
          <button className='btn btn-light px-3'>Signup</button>
        </div>
      </div>
      
      </div>
      <div className='container'>
      <div className='row mb-3'>
          <div className='col-md-3'></div>
          <div className='col-md-3 col-sm-6'>
            <img className="img-fluid" src={frame1} alt='youtube' />
          </div>
          <div className='col-md-3 col-sm-6'>
            <img className="img-fluid" src={frame2} alt='youtube' />
          </div>
          <div className='col-md-3 col-sm-12 mt-3 mt-sm-0'>
            <img className="img-fluid" src={frame3} alt='youtube' />
          </div>
        </div>
      </div>

      <div className='p-2 text-light text-center container' style={{ fontSize: "small",position:"relative",bottom:"0px" }}>
        <i className="fa-regular fa-copyright" style={{ color: "#f9fafa" }}></i>2023 All Rights Reserved.Bolanas Commercial Enterprise, LLC
      </div>
    </>
   
  );
}

export default Footer;
