import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import partner2 from '../Assets/images/partner2.png'; // Update the path for your images
import partner3 from '../Assets/images/partner3.png';
import partner4 from '../Assets/images/partner4.png';
import partner5 from '../Assets/images/partner5.png';
import partner6 from '../Assets/images/partner6.png';

class Sponsorslider extends React.Component {
  render() {
    const isSmallScreen = window.innerWidth < 600; // Adjust the breakpoint as needed

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: isSmallScreen ? 2 : 5, // Show 1 slide on small screens, 5 slides on larger screens
      slidesToScroll: 1,
     
    };

    return (
      <div className="sponsor border-bottom">
        <div className="container ">
          <div className="row d-flex p-5">
          <div className="col-md-2 text-center mb-4 " style={{ borderRight: "1px solid grey" }}>
                <span style={{ fontSize: "small" }}>The best security<br></br>
                  <span style={{ fontSize: "22px", lineHeight: "0.4" }}><b>Main partners</b></span>
                </span>

              </div>
            {isSmallScreen ? (
                
              <Slider  {...settings}>
                   
                <div className="col-md-2 " >
                  <img src={partner2} style={{marginLeft:"50px"}} alt="partner" />
                </div>
                <div className="col-md-2" >
                  <img src={partner3} style={{marginLeft:"50px"}} alt="partner" />
                </div>
                <div className="col-md-2">
                  <img src={partner4}  style={{marginLeft:"50px"}}  alt="partner" />
                </div>
                <div className="col-md-2" >
                  <img src={partner5} style={{marginLeft:"50px"}}  alt="partner" />
                </div>
                <div className="col-md-2" >
                  <img src={partner6} style={{marginLeft:"50px"}}  alt="partner" />
                </div>
              </Slider>
            ) : (
              <>
                  
                <div className="col-md-2">
                  <img src={partner2} width="100%" alt="partner" />
                </div>
                <div className="col-md-2">
                  <img src={partner3} width="100%" alt="partner" />
                </div>
                <div className="col-md-2">
                  <img src={partner4} width="100%" alt="partner" />
                </div>
                <div className="col-md-2">
                  <img src={partner5} width="100%" alt="partner" />
                </div>
                <div className="col-md-2">
                  <img src={partner6} width="100%" alt="partner" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsorslider;
