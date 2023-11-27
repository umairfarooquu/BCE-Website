import { Link } from "react-router-dom";
import rectangal from "../Assets/images/Rectangle 34627069.png"
import Truck from "../Assets/images/Group 1171278547.png";
import lady from "../Assets/images/ladydaina.png"
import "./Motortruckcargoinsurance.css"
function Motortruckcargoinsurance() {
    return (
        <>
            <div className="maintopmotor">
                <div className="container  text-light ">
                    <span className="location mt-5">
                    <Link style={{textDecoration:"none",color:"white"}} to="/">   <i class="fa-solid fa-less-than" style={{ color: "#f0f2f4" }}></i> Home/ <b style={{ fontSize: "small" }}>Motor Truck Cargo Insurance</b></Link>
                        <h2 className="text-center mt-3">Motor truck cargo insurance</h2>

                    </span>
                </div>
            </div>

            <div className="mainbody ">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <span >We help you at any time</span>
                            <h3><b>What Is Motor Truck Cargo Insurance?</b></h3>
                            <img className="mb-3" src={rectangal} alt="image" />
                            <p >
                                Motor Truck Cargo Insurance safeguards trucking companies from financial losses resulting from damage or loss of transported goods. This policy covers cargo against accidents, theft, and unforeseen events. Typically, freight brokers mandate a minimum of $100,000 MTC coverage.
                            </p>
                            <div className="d-flex">
                            <button className="btn btn-dark p-2 px-5 text-start">Get a Quote</button><button className="btn btn-outline-dark mx-3 px-5 p-2 text-start">Contact us</button>

                            </div>

                        </div>
                        <div className="col-md-6">
                            <img style={{ width: "100%" }} src={Truck} alt="trucimage" />
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <span>Do the same as thousands of customers</span>
<h3><b>Secure Motor Truck Cargo Insurance quickly and effortlessly.</b></h3>
<p>Get in touch with an expert who can guide you through the intricacies<br></br> of trucking insurance and leverage a contemporary platform to <br></br>increase the efficiency of your business.</p>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-6">
                            <img width="100%" src={lady} alt="care"/>
                        </div>
                        <div className="col-md-6 listitem">
                            <ul>
                            <li className="d-flex border-bottom mt-3">
                <i className="fa-regular fa-clock mt-1"></i> &nbsp;
                <div>
                    <b>Complete in minutes, all online</b>
                    <p style={{fontSize:"small"}}>Acquire coverage within minutes, not days, through our online platform.</p>
                </div>
            
                                    
                                </li>
                                <li className="d-flex border-bottom mt-5">
                                <i class="fa-solid fa-globe mt-1"></i> &nbsp;
                <div>
                    <b>Complete in minutes, all online</b>
                    <p style={{fontSize:"small"}}>Access coverage 24/7, day or night. With instant access to certificates of insurance once the policy is purchased. </p>
                </div>
            
                                    
                                </li>
                                <li className="d-flex border-bottom mt-5">
                                <i class="fa-solid fa-hand-holding-dollar mt-1"></i> &nbsp;
                <div>
                    <b>Complete in minutes, all online</b>
                    <p style={{fontSize:"small"}}>We offer competitive rates for all your products and services. Our commitment is to provide the best protection for our customers without compromising quality or value.</p>
                </div>
            
                                    
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Motortruckcargoinsurance;