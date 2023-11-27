import { Link } from "react-router-dom";
import rectangal from "../Assets/images/Rectangle 34627069.png"
import group from "../Assets/images/Group 1171278547 (1).png";
import smile from "../Assets/images/smile.png"
import "./Motortruckcargoinsurance.css"
import varify from "../Assets/images/CircleWavyCheck.png"
function PhysicalDemagaeInsurance() {
    return (
        <>
            <div className="maintopmotor">
                <div className="container  text-light ">
                    <span className="location mt-5">
                     <Link style={{textDecoration:"none",color:"white"}} to="/"><i class="fa-solid fa-less-than" style={{ color: "#f0f2f4" }}></i> Home/ <b style={{ fontSize: "small" }}>Physical damage insurance</b></Link>   
                        <h2 className="text-center mt-3">Physical damage insurance</h2>

                    </span>
                </div>
            </div>

            <div className="mainbody ">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <span >We help you at any time</span>
                            <h3><b>What Is Physical Damage Insurance?</b></h3>
                            <img className="mb-3" src={rectangal} alt="image" />
                            <p >
                            Physical Damage Insurance shields commercial trucking companies from financial loss caused by physical damage to their vehicles. Providing coverage for damage resulting from both at-fault and non-at-fault accidents.                            </p>
                            <div className="d-flex">
                            <button className="btn btn-dark p-2 px-5 text-start">Get a Quote</button><button className="btn btn-outline-dark mx-3 px-5 p-2 text-start">Contact us</button>

                            </div>

                        </div>
                        <div className="col-md-6">
                            <img style={{ width: "100%" }} src={group} alt="trucimage" />
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <span>Do the same as thousands of customers</span>
<h3><b>3 Reasons for Getting Physical Damage Insurance</b></h3>
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
                    <b>Protects against financial loss in the event of an accident</b>
                    <p style={{fontSize:"small"}}>Physical damage insurance can assist in covering the expenses for repairing or replacing a truck damaged in an accident.</p>
                </div>
            
                                    
                                </li>
                                <li className="d-flex border-bottom mt-5">
                                <img src={varify} alt="checked" width="25px" height="25px"/>  &nbsp;
                <div>
                    <b>Provides coverage for non-collision events</b>
                    <p style={{fontSize:"small"}}>Physical damage insurance extends coverage to damage resulting from events like theft, vandalism, or natural disasters.</p>
                </div>
            
                                    
                                </li>
                                <li className="d-flex border-bottom mt-5">
                                <img src={varify} alt="checked" width="25px" height="25px"/>  &nbsp;
                <div>
                    <b>Offers peace of mind by ensuring your truck is protected.</b>
                    <p style={{fontSize:"small"}}>Physical damage insurance provides commercial truckers with the peace of mind that they are financially protected in case of vehicle damage.</p>
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
export default PhysicalDemagaeInsurance;