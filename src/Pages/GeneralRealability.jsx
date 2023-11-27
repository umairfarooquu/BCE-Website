import { Link } from "react-router-dom";
import rectangal from "../Assets/images/Rectangle 34627069.png"
import group from "../Assets/images/GeneralRealibility.png";
import smile from "../Assets/images/oldman.png"
import "./Motortruckcargoinsurance.css"
import varify from "../Assets/images/CircleWavyCheck.png"

function GeneralRealability() {
    return (
        <>
            <div className="maintopmotor">
                <div className="container  text-light ">
                    <span className="location  mt-5">
                    <Link style={{textDecoration:"none",color:"white"}} to="/">  <i class="fa-solid fa-less-than" style={{ color: "#f0f2f4" }}></i> Home/ <b style={{ fontSize: "small" }}>General liability insurance</b></Link>
                        <h2 className="text-center mt-3">General liability insurance</h2>

                    </span>
                </div>
            </div>

            <div className="mainbody ">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <span >We help you at any time</span>
                            <h3><b>What is general liability insurance?</b></h3>
                            <img className="mb-3" src={rectangal} alt="image" />
                            <p >
                            This insurance shields businesses from financial losses resulting from lawsuits or claims related to property damage, bodily injury, or other harm caused by their operations. It covers expenses such as legal fees, settlements, and judgments.</p>
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
<h3><b>3 Reasons for getting GL insurance</b></h3>
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
                    <b>Protects against financial loss if the trucker is at fault of an accident</b>
                    <p style={{fontSize:"small"}}>General liability insurance can assist in covering property damage or medical expenses if a trucker is deemed at fault in an accident.</p>
                </div>
            
                                    
                                </li>
                                <li className="d-flex border-bottom mt-5">
                                <img src={varify} alt="checked" width="25px" height="25px"/>  &nbsp;
                <div>
                    <b>Required by some brokers and shippers</b>
                    <p style={{fontSize:"small"}}>Depending on the broker or shipper's requirements, commercial truckers may need to have general liability insurance as a condition of their employment.</p>
                </div>
            
                                    
                                </li>
                                <li className="d-flex border-bottom mt-5">
                                <img src={varify} alt="checked" width="25px" height="25px"/>  &nbsp;
                <div>
                    <b>Provides peace of mind</b>
                    <p style={{fontSize:"small"}}>General liability insurance provides commercial truckers with peace of mind, knowing they are financially protected in the event of an accident.</p>
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
export default GeneralRealability;