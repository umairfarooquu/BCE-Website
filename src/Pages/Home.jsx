import "./Home.css";
import React, { Component } from "react";

import rectangal from "../Assets/images/Rectangle 34627069.png"
import partner1 from "../Assets/images/partner1.png"
import partner2 from "../Assets/images/partner2.png"
import partner3 from "../Assets/images/partner3.png"
import partner4 from "../Assets/images/partner4.png"
import partner5 from "../Assets/images/partner5.png"
import partner6 from "../Assets/images/partner6.png"
import varify from "../Assets/images/CircleWavyCheck.png"
import smile from "../Assets/images/smile.png"
import truckdrive from "../Assets/images/truckdriver.jpeg"
import lady from "../Assets/images/ladydaina.png"
import dollar from "../Assets/images/CurrencyDollar.png"
import jeep from "../Assets/images/Jeep.png"
import call from "../Assets/images/PhoneCall.png"
import trucker from "../Assets/images/this section.png"
import greencheck from "../Assets/images/CircleWavyCheck (1).png"
import quotes from "../Assets/images/“.png"
import profile from "../Assets/images/Ellipse 10574.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Sponsorslider from "./Sponsorslider"
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
class Home extends Component {

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
    const isSmallScreen = window.innerWidth < 600;
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: isSmallScreen ? 1 : 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
  return (
    <>
      <div className="container herosection pt-5">
        <div className="row">
          <div className="col-md-5">
            <buton className="homebutton p-2">
              Complete Protrction
            </buton>
            <buton className="homebutton p-2 mx-2">
              24 hours Assistance
            </buton>
            <h1 className="mt-4">
              The easiest way to buy and manage trucking insurance
            </h1>
            <p style={{ fontSize: "small", color: "grey" }}>Talk to our experts and get all your questions<br></br> answered and get a no-obligation quote</p>
            <img src={rectangal} alt="image" width="50px" />


            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <span className="partner">+100</span>
                  <span className="newpart" style={{ fontSize: "small", color: "grey" }}><br></br>
                    Partner insurance companies
                  </span>
                </div>
                <div className="col-md-4">
                  <span className="partner">+200</span>
                  <span style={{ fontSize: "small", color: "grey" }}><br></br>
                    Satisfied customers
                  </span>
                </div>
                <div className="col-md-4">
                  <span className="partner">+500</span>
                  <span style={{ fontSize: "small", color: "grey" }}><br></br>
                    Positive reviews on Facebook      </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="homebody">
        <Sponsorslider/>
        <div className="text-center mt-5">
          <span style={{ fontSize: "small", color: "grey" }}>The best insurance companies are with us</span>
          <h3><b>Get Instant Quotes Online Today!</b></h3>
          <img src={rectangal} alt="image" />

          <p style={{ fontSize: "small" }}>Get in touch with an expert who can guide you through the intricacies of trucking insurance<br></br> and leverage a contemporary platform to increase the efficiency of your business.<br></br> of trucking insurance and leverage a contemporary platform to <br></br>increase the efficiency of your business.</p>
        </div>

        <div className="container">
          <div className="row mt-5">


            <div className="col-md-6 homelist" >
              
              <ul>

            
                <li className="d-flex border-bottom mt-3">
                  <img src={varify} alt="checked" width="25px" height="25px" /> &nbsp;
                  <div>
                    <b>Protects against financial loss in the event of an accident</b>
                    <p style={{ fontSize: "small" }}>Physical damage insurance can assist in covering the expenses for repairing or replacing a truck damaged in an accident.</p>
                  </div>
                </li>
                <li className="d-flex border-bottom mt-2">
                  <img src={varify} alt="checked" width="25px" height="25px" />  &nbsp;
                  <div>
                    <b>Provides coverage for non-collision events</b>
                    <p style={{ fontSize: "small" }}>Physical damage insurance extends coverage to damage resulting from events like theft, vandalism, or natural disasters.</p>
                  </div>
                </li>
                <li className="d-flex border-bottom mt-2">
                  <img src={varify} alt="checked" width="25px" height="25px" />  &nbsp;
                  <div>
                    <b>Offers peace of mind by ensuring your truck is protected.</b>
                    <p style={{ fontSize: "small" }}>Physical damage insurance provides commercial truckers with the peace of mind that they are financially protected in case of vehicle damage.</p>
                  </div>
                </li>

                <li className="d-flex border-bottom mt-2">
                  <img src={varify} alt="checked" width="25px" height="25px" />  &nbsp;
                  <div>
                    <b>Offers peace of mind by ensuring your truck is protected.</b>
                    <p style={{ fontSize: "small" }}>Physical damage insurance provides commercial truckers with the peace of mind that they are financially protected in case of vehicle damage.</p>
                  </div>
                </li>
              </ul>
            </div>



            <div className="col-md-6">
              <img width="100%" src={smile} alt="care" />
            </div>
          </div>
        </div>

        <div className="trucking mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 imgcontainer">
                <img src={truckdrive} width="100%" height="300px" alt="trucsite" />
              </div>
              <div className="col-md-8 px-5">
                <p className="mt-3" style={{ fontSize: "20px" }}>Talk to a trucking insurance specialist</p>
                <p style={{ fontSize: "small", color: "grey" }}>Our in-house team includes former truckers who understand the challenges of the industry.<br></br> Reach out today for dedicated support from an agent who specializes in truck insurance.</p>
                <div className="d-flex mt-4">
                  <div className="phonebox ">
                    <i class="fa-solid fa-phone"></i><br></br>
                    <span style={{ color: "grey" }}>Talk to us by Phone</span><br></br>
                    <span>(301) 591 - 6550</span>
                  </div>
                  <div className="mx-3 phonebox ">
                    <i class="fa-regular fa-envelope-open"></i><br></br>
                    <span style={{ color: "grey" }}>Talk to us by Email</span><br></br>
                    <span>operations@bceins.com</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span ><i class="fa-solid fa-certificate"></i> Have the best insurance in your hands right now,<b>Get your quote <i class="fa-solid fa-arrow-right"></i></b> </span>

                </div>


              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 listitem">
              <div style={{ marginLeft: "40px" }}>
                <span style={{ fontSize: "small", color: "grey" }}>The best insurance companies are with us</span>
                <h4><b>How our platform works</b></h4>
                <img src={rectangal} alt="image" />

                <p style={{ fontSize: "small", color: "grey" }}>Watch the video and understand why<br></br> thousands of people are already using our<br></br> services and are protected</p>
              </div>
              <ul>
                <li className="d-flex border-bottom mt-3">
                  <img src={call} alt="checked" width="25px" height="25px" /> &nbsp;
                  <div className="mb-2">
                    <b>Connect with a live agent</b>
                  </div>


                </li>
                <li className="d-flex border-bottom mt-5">
                  <img src={jeep} alt="checked" width="25px" height="25px" />  &nbsp;
                  <div className="mb-2">
                    <b>Trucking industry especialists</b>
                  </div>


                </li>
                <li className="d-flex border-bottom  mt-5">
                  <img src={dollar} alt="checked" width="25px" height="25px" />  &nbsp;
                  <div className="mb-2">
                    <b>Competitive rates</b>
                  </div>


                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img width="100%" src={trucker} alt="care" />
            </div>

          </div>

        </div>
        <div className="text-center mt-5">
                        <span style={{fontSize:"small",color:"grey"}}>Do the same as thousands of customers</span>
<h3 ><b>Quote. Purchase. Manage.</b></h3>
<img src={rectangal} alt="image" />

<p style={{fontSize:"small",color:"grey"}}>The BCE Trucking platform enhances your speed and efficiency when it comes to managing your trucking<br></br> insurance. It stands out as the sole digital trucking insurance platform that allows you to compare quotes, buy<br></br> policies, and stay connected with your agent, all within a single, convenient location.</p>
                    </div>
  




      <div className="container" >
        <div className="row justify-content-center " style={{gap:"20px"}}>
          <div className="col-md-3 p-3" style={{border:"1px solid grey",borderBottom:"3px solid black",borderRadius:"5px"}} >
         <h1>1</h1>
         <b>Educate</b>
         <div className="mt-3">
<span  style={{fontSize:"small",color:"grey"}}>
         Access valuable educational resources<br></br> shared by industry veterans who are<br></br> former trucking company owners.
         </span>

         </div>
         
         <div className="d-flex mt-5 align-items-center">
          <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Implement top safety measures</span>
         </div>
         <div className="d-flex mt-3  align-items-center">
         <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Implement top safety measures</span>
         </div>
         <div className="d-flex mt-3  align-items-center">
         <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Implement top safety measures</span>
         </div>
          </div>
          <div className="col-md-3 p-3 " style={{border:"1px solid grey",borderBottom:"3px solid black",borderRadius:"5px"}} >
         <h1>2</h1>
         <b>Quote</b>
         <div className="mt-3">
<span  style={{fontSize:"small",color:"grey"}}>
Have it on hand  the best quotes shared by industry veterans who are former trucking company owners.         </span>

         </div>
         
         <div className="d-flex mt-5 align-items-center">
          <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Get a quote within 5 minutes</span>
         </div>
         <div className="d-flex mt-3  align-items-center">
         <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Explore options with numerous carriers</span>
         </div>
         <div className="d-flex mt-3  align-items-center">
         <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Buy only what’s essential for your needs</span>
         </div>
          </div>
          <div className="col-md-3 p-3  align-items-center" style={{border:"1px solid grey",borderBottom:"3px solid black",borderRadius:"5px"}} >
         <h1>3</h1>
         <b>Purchase</b>
         <div className="mt-3">
<span  style={{fontSize:"small",color:"grey"}}>
Acquire insurance that offers top-notch coverage at the most competitive rate, and you can always reach out to our knowledgeable agents         </span>

         </div>
         
         <div className="d-flex mt-5 align-items-center">
          <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Purchase coverage using our flexible payment choices</span>
         </div>
         <div className="d-flex mt-3  align-items-center">
         <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Obtain competitive rates tailored to your situation</span>
         </div>
         <div className="d-flex mt-3  align-items-center">
         <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Secure coverage that permits you to collaborate with any broketr.</span>
         </div>
          </div>
        </div>
        <div className="text-center mt-4">
                  <span ><i class="fa-solid fa-certificate"></i> Have the best insurance in your hands right now,<b>Get your quote <i class="fa-solid fa-arrow-right"></i></b> </span>

        </div>

      </div>
    
      <div className="container mt-5" >
        <div className="row "  >
          <div className="col-md-3  pb-5">
            <span className="smalltext">See who is walking this path with us</span>
            <h4><b>Google reviews</b></h4>
            <img className="mb-3" src={rectangal} alt="image" />
            <p className="smalltext">Watch the video and understand why thousands of people are already using our services and are protected</p>
<br></br>
              <button className="btn " onClick={this.previous} style={{backgroundColor:"white",borderRadius:"50%",border:"2px solid black"}}>
              <i class="fa-solid fa-less-than"></i>
              </button>
           
            
              <button className="btn leftbutton mx-2" onClick={this.next} >
              <i class="fa-solid fa-greater-than"></i>              </button>
           
          </div>
          <div className="col-md-9" >
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div key={1} >
              <img src={quotes} style={{position:"relative",top:"20px",width:"50px",left:"10px"}}  alt="team"/>

                <div className="p-3 pt-3"style={{backgroundColor:"white",borderRadius:"10px",width:"90%"}} >
                <div className="d-flex pt-3 align-items-center">
                <img src={profile} width="40px"  alt="team"/> &nbsp; &nbsp; 
                 <b>Alessandro Daluiz</b>
                </div>
                <p className="smalltext">I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!</p>

                </div>
             
              </div>
              <div key={2} >
              <img src={quotes} style={{position:"relative",top:"20px",width:"50px",left:"10px"}}  alt="team"/>

                <div className="p-3 pt-3"style={{backgroundColor:"white",borderRadius:"10px",width:"90%"}} >
                <div className="d-flex pt-3 align-items-center">
                <img src={profile} width="40px"  alt="team"/> &nbsp; &nbsp; 
                 <b>Alessandro Daluiz</b>
                </div>
                <p className="smalltext">I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!</p>

                </div>
              </div>
              <div key={3}>
              <img src={quotes} style={{position:"relative",top:"20px",width:"50px",left:"10px"}}  alt="team"/>

<div className="p-3 pt-3"style={{backgroundColor:"white",borderRadius:"10px",width:"90%"}} >
<div className="d-flex pt-3 align-items-center">
<img src={profile} width="40px"  alt="team"/> &nbsp; &nbsp; 
 <b>Alessandro Daluiz</b>
</div>
<p className="smalltext">I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!</p>

</div>
              </div>
              <div key={4}>
              <img src={quotes} style={{position:"relative",top:"20px",width:"50px",left:"10px"}}  alt="team"/>

                <div className="p-3 pt-3"style={{backgroundColor:"white",borderRadius:"10px",width:"90%"}} >
                <div className="d-flex pt-3 align-items-center">
                <img src={profile} width="40px"  alt="team"/> &nbsp; &nbsp; 
                 <b>Alessandro Daluiz</b>
                </div>
                <p className="smalltext">I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!</p>

                </div>
              </div>
              <div key={5}>
              <img src={quotes} style={{position:"relative",top:"20px",width:"50px",left:"10px"}}  alt="team"/>

                <div className="p-3 pt-3"style={{backgroundColor:"white",borderRadius:"10px",width:"90%"}} >
                <div className="d-flex pt-3 align-items-center">
                <img src={profile} width="40px"  alt="team"/> &nbsp; &nbsp; 
                 <b>Alessandro Daluiz</b>
                </div>
                <p className="smalltext">I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!</p>

                </div>
              </div>
              <div key={6}>
              <img src={quotes} style={{position:"relative",top:"20px",width:"50px",left:"10px"}}  alt="team"/>

                <div className="p-3 pt-3"style={{backgroundColor:"white",borderRadius:"10px",width:"90%"}} >
                <div className="d-flex pt-3 align-items-center">
                <img src={profile} width="40px"  alt="team"/> &nbsp; &nbsp; 
                 <b>Alessandro Daluiz</b>
                </div>
                <p className="smalltext">I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!</p>

                </div>
              </div>
            </Slider>
          </div>
         
        </div>
      </div>
      </div>
    </>
  )
}}
export default Home