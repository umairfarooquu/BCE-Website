import { Link } from "react-router-dom";
import rectangal from "../Assets/images/Rectangle 34627069.png"
import group from "../Assets/images/collector.png";
import smile from "../Assets/images/gentleman.png"
import "./Motortruckcargoinsurance.css"
import varify from "../Assets/images/CircleWavyCheck.png"

function Autoliability() {
    return (
        <>
            <div className="maintopmotor">
                <div className="container  text-light ">
                    <span className="location mt-5">
                    <Link style={{textDecoration:"none",color:"white"}} to="/">  <i class="fa-solid fa-less-than" style={{ color: "#f0f2f4" }}></i> Home/ <b style={{ fontSize: "small" }}>Auto liability insurance</b></Link>
                        <h2 className="text-center mt-3">Auto liability insurance</h2>

                    </span>
                </div>
            </div>

            <div className="mainbody ">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <span >We help you at any time</span>
                            <h3><b>What is auto liability insurance?</b></h3>
                            <img className="mb-3" src={rectangal} alt="image" />
                            <p >
                            Auto liability coverage is vital and required by law. It protects against accident-related injury or damage. Most freight brokers require at least $1,000,000 in coverage, ensuring compliance and peace of mind on the road.                            </p>
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
<h3><b>3 Reasons for getting auto liability insurance</b></h3>
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
                    <p style={{fontSize:"small"}}>Auto liability insurance covers property damage, medical bills, and legal fees when a trucker is at fault in an accident, providing financial protection and peace of mind.</p>
                </div>
            
                                    
                                </li>
                                <li className="d-flex border-bottom mt-5">
                                <img src={varify} alt="checked" width="25px" height="25px"/>  &nbsp;
                <div>
                    <b>Required by law</b>
                    <p style={{fontSize:"small"}}>Commercial truckers are legally obliged to maintain auto liability insurance. If you possess an MC Authority, the law mandates a minimum if $750,000 Auto Liability Coverage</p>
                </div>
            
                                    
                                </li>
                                <li className="d-flex border-bottom mt-5">
                                <img src={varify} alt="checked" width="25px" height="25px"/>  &nbsp;
                <div>
                    <b>Protects against lawsuits</b>
                    <p style={{fontSize:"small"}}>Auto liability insurance assists truckers facing lawsuits after accidents, covering legal fees and awarded damages, offering financial protection and peace of mind.</p>
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
export default Autoliability;