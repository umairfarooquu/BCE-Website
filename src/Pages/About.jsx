import React, { Component } from "react";

import { Link } from "react-router-dom";
import rectangal from "../Assets/images/Rectangle 34627069.png"
import group from "../Assets/images/Laugh.png";
import smile from "../Assets/images/truckfront.png"
import "./Motortruckcargoinsurance.css"
import varify from "../Assets/images/CircleWavyCheck.png"
import thumbs from "../Assets/images/Thumbsup.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import team1 from "../Assets/team/Frame 1171278545 (1).png"
import team2 from "../Assets/team/Frame 1171278607.png"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
class About extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
        <>
            <div className="maintopmotor">
                <div className="container  text-light ">
                    <span className="location  mt-5">
                    <Link style={{textDecoration:"none",color:"white"}} to="/">  <i class="fa-solid fa-less-than" style={{ color: "#f0f2f4" }}></i> Home/ <b style={{ fontSize: "small" }}>About us</b></Link>
                        <h2 className="text-center mt-3">About us</h2>

                    </span>
                </div>
            </div>

            <div className="mainbody ">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <span >Trusted insurer</span>
                            <h3><b>Our mission</b></h3>
                            <img className="mb-3" src={rectangal} alt="image" />
                            <p >
                            At BCE, our mission is to empower trucking businesses with tailored insurance solutions and expert guidance. We are committed to simplifying the complexities of the industry, ensuring compliance, and promoting success on the road. With a foundation built by truckers, for truckers, we stand by our clients every mile of the journey, providing peace of mind and unparalleled support.</p>
                            <div className="d-flex">
                            <button className="btn btn-dark p-2 px-5 text-start">Get a Quote</button><button className="btn btn-outline-dark mx-3 px-5 p-2 text-start">Contact us</button>

                            </div>

                        </div>
                        <div className="col-md-6">
                            <img style={{ width: "100%" }} src={group} alt="trucimage" />
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <span>Connecting trucking challenges with needed solutions</span>
<h3><b>Helping all truckers thrive</b></h3>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-6">
                            <img width="100%" src={smile} alt="care"/>
                        </div>
                        <div className="col-md-6 listitem">
                            <ul>
                            <li className="d-flex border-bottom mt-3">
                <img src={varify} alt="checked" width="25px" height="25px"/> &nbsp;
                <div>
                    <b>Need help understanding trucking compliance?</b>
                    <p style={{fontSize:"small"}}>We don't just provide insurance; we also assist with a range of DOT compliance issues.</p>
                </div>
            
                                    
                                </li>
                                <li className="d-flex border-bottom mt-5">
                                <img src={varify} alt="checked" width="25px" height="25px"/>  &nbsp;
                <div>
                    <b>Having issues find competitive rates?</b>
                    <p style={{fontSize:"small"}}>Fed up with multiple agencies not  finding affordable coverage for your business?</p>
                </div>
            
                                    
                                </li>
                                <li className="d-flex border-bottom mt-5">
                                <img src={varify} alt="checked" width="25px" height="25px"/>  &nbsp;
                <div>
                    <b>Losing loads due to slow COI’s?</b>
                    <p style={{fontSize:"small"}}>Frustrated by lost loads due to delayed COIs from your agent?</p>
                </div>
            
                                    
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="container mt-5">
                <div className="row">
                     <div className="col-md-5">
                            <img style={{ width: "100%" }} src={thumbs} alt="trucimage" />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                            <span >Trusted insurer</span>
                            <h3><b>Our mission</b></h3>
                            <img className="mb-3" src={rectangal} alt="image" />
                            <p >
                            At BCE, our mission is to empower trucking businesses with tailored insurance solutions and expert guidance. We are committed to simplifying the complexities of the industry, ensuring compliance, and promoting success on the road. With a foundation built by truckers, for truckers, we stand by our clients every mile of the journey, providing peace of mind and unparalleled support.</p>
                           

                        </div>
                       
                    </div>
                </div>

         



            
                <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 pt-5 pb-5">
            <span>Experienced team</span>
            <h4><b>The leadership team behind BOLANOS</b></h4>
            <img className="mb-3" src={rectangal} alt="image" />
<br></br>
              <button className="btn" onClick={this.previous} style={{backgroundColor:"white",borderRadius:"50%",border:"2px solid black"}}>
              <i class="fa-solid fa-less-than"></i>
              </button>
           
            
              <button className="btn" onClick={this.next} style={{backgroundColor:"white",borderRadius:"50%",border:"2px solid black"}}>
              <i class="fa-solid fa-greater-than"></i>              </button>
           
          </div>
          <div className="col-md-9">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div key={1}>
                <img src={team1} width="90%" alt="team"/>
              </div>
              <div key={2}>
              <img src={team2} width="90%" alt="team"/>
              </div>
              <div key={3}>
              <img src={team1} width="90%" alt="team"/>
              </div>
              <div key={4}>
              <img src={team2} width="90%" alt="team"/>
              </div>
              <div key={5}>
              <img src={team1} width="90%" alt="team"/>
              </div>
              <div key={6}>
              <img src={team1} width="90%" alt="team"/>
              </div>
            </Slider>
          </div>
         
        </div>
      </div>
      

      
   


            </div>
        </>
    )
}}
export default About;
