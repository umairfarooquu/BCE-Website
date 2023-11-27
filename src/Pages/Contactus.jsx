import { Link } from "react-router-dom";
import rectangal from "../Assets/images/Rectangle 34627069.png"
import truckdrive from "../Assets/images/last.png"

import checkshield from "../Assets/images/ShieldCheck.png"
import "./Motortruckcargoinsurance.css"
import { useState } from "react";
function Contactus() {
    const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    // Toggle the active index
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
    return (
        <>
            <div className="maintopmotor" style={{height:"100px"}}>
                <div className="container  text-light ">
                    <span className="location d-flex mt-2" >
                    <Link style={{textDecoration:"none",color:"white"}} to="/">   <i class="fa-solid fa-less-than" style={{ color: "#f0f2f4" }}></i> Home/ <b style={{ fontSize: "small" }}>Contact us</b></Link>
                        <h2 className="mx-auto">Contact us</h2>

                    </span>
                </div>
               
            </div>

            <div className="mainbody ">
            <div className="contactusbody p-5 ">
                    <div className="container contactfoam p-5 pb-0">
                 <div className="row">
                  <div className="col-md-6">
                     <h1 style={{fontWeight:"bold",fontSize:"35px"}}>Get in touch<br></br> with us</h1>
<div className="mt-5">
                    <span>Find us at</span><br></br>
                    <span className="smalltext"><i class="fa-solid fa-location-dot"></i> 66 Waverley Dr. Ste 630, Frederick, MD 21702</span>
                 </div>
                 <div className="mt-5">
                    <span>Reach out to us at</span>
                    <p className="smalltext mt-2"><i class="fa-regular fa-envelope-open"></i> Operations@bceins.com</p>
                    <p className="smalltext"><i class="fa-solid fa-phone"></i> 301-591-6550</p>

                 </div>

                  </div>
                  <div className="col-md-6">
                  <div class="p-3 rounded"style={{backgroundColor:"white",position:"relative",top:"30px"}} >

    <h5 className="text-dark"><b>Contact us</b></h5>

 
  <div className="form mt-4 maincard mx-3 border-bottom" style={{width:"90%"}}>
                 <input className="form-control mb-3 signupinputs" type="text" placeholder="Your Name" aria-label="Your Name"/>
                 <input className="form-control mb-3 signupinputs" type="text" placeholder="E-mail" aria-label="E-mail"/>
                 <input className="form-control mb-3 signupinputs" type="number" placeholder="Phone number" aria-label="default input example"/>
                 <textarea className="form-control mb-3 signupinputs" type="number" placeholder="Message" aria-label="default input example"></textarea>

                 <button className="btn btn-dark" style={{width:"100%"}}>I want to be a customer</button>
                 <p className=" mt-3 smalltext">By submitting your data, you authorize us to contact you, To find out more, see our <u>Privacy policy</u></p>

                 </div>
                 <div className="d-flex align-items-center mt-2">
                  <img src={checkshield} width="25px" alt="check"/> &nbsp; 
                  <b style={{fontSize:"small",color:"black"}}>Your data is safe with us</b>
                 </div>
 
</div>
                  </div>
                 
                 </div>
                 
                    </div>
                </div>

                <div className="text-center mt-5">
                        <span className="smalltext">Got questions? We have answers!</span>
<h3><b>Frequently asked questions</b></h3>
<img src={rectangal} alt="line"/>
                    </div>
                    <div >
                        
                    </div >


  <div className="container">
    <div className="row mt-5 mb-5">
        <div className="col-md-6">
        <ul className="accordion">
      <li onClick={() => handleItemClick(0)} className={activeIndex === 0 ? 'active' : ''}>
      What is physical damage insurance <i class="fa-solid fa-arrow-right float-end justify-content-center"></i>
              {activeIndex === 0 && <div className="accordion-content">Information for Item 1</div>}
      </li>
      <li onClick={() => handleItemClick(1)} className={activeIndex === 1 ? 'active' : ''}>
      What is general liability insurance  <i class="fa-solid fa-arrow-right float-end justify-content-center"></i>
              {activeIndex === 1 && <div className="accordion-content">Information for Item 2</div>}
      </li>
      <li onClick={() => handleItemClick(2)} className={activeIndex === 2 ? 'active' : ''}>
      What is motor truck cargo insurance  <i class="fa-solid fa-arrow-right float-end justify-content-center"></i>
        {activeIndex === 2 && <div className="accordion-content">Information for Item 3</div>}
      </li>
      <li onClick={() => handleItemClick(3)} className={activeIndex === 3 ? 'active' : ''}>
      What is trailer interchange insurance  <i class="fa-solid fa-arrow-right float-end justify-content-center"></i>
        {activeIndex === 3 && <div className="accordion-content">Information for Item 4</div>}
      </li> <li onClick={() => handleItemClick(4)} className={activeIndex === 4 ? 'active' : ''}>
      Why should i shop insurance with BCE  <i class="fa-solid fa-arrow-right float-end justify-content-center"></i>
        {activeIndex === 4 && <div className="accordion-content">Information for Item 5</div>}
      </li>
    </ul>
        </div>
        <div className="col-md-6">
<img src={truckdrive} width="100%" alt="picture"/>
        </div>
    </div>
  </div>


                    <div style={{width:"100%"}}>
                          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73328.19074325544!2d-74.34964364706128!3d40.72550604723152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700993464406!5m2!1sen!2s"
        width="100%"
        height="300px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="My Google Map"
        ></iframe>  
                    </div>
                            </div>
        </>
    )
}
export default Contactus;