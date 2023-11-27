import "./Login.css"
import logo from "../Assets/images/Brand-logo.png"
import facebook from"../Assets/icons/icons8-facebook-48.png";
import twitter from "../Assets/icons/icons8-twitter-circled-48.png";
import google from "../Assets/icons/icons8-google-48.png";
import rightsider from"../Assets/images/WhatsApp Image 2023-11-24 at 02.54.25_a627490f.jpg"
function Login(){
    return(
        <>
        <div className="mainlogin">
              <div className="row "style={{height:"100vh"}}>
            <div className="col-md-6 loginscreen" style={{background: "#F0F8FF"}}>
                <div className="centeralign mt-4">
                <img src={logo} style={{width:"90px"}} alt="bce-logo"/>
                 <div className="mt-4">
<p className="account" ><b>Login</b></p>
                <span >Access back to your account</span>

                 </div>
                 <div className="form mt-4 maincard" style={{width:"90%"}}>
                 <input className="form-control mb-3 signupinputs" type="text" placeholder="E-mail/ Username" aria-label="Your Name"/>
                 <input className="form-control mb-3 signupinputs" type="password" placeholder="Password" aria-label="E-mail"/>
                <b className="float-end">Forgot password?</b>
                 <button className="btn btn-dark mt-3" style={{width:"100%"}}>Register</button>
                 <p className="text-center mt-3">New user? <b>Register Account</b></p>
              <div className="d-flex mt-5">
                <hr className="d-flex loginlin"></hr> &nbsp;&nbsp;&nbsp; or Login with &nbsp;&nbsp;&nbsp; <hr  className="d-flex loginlin"></hr>
              </div>
              <div className="d-flex justify-content-center">
                <img src={twitter} alt="twitter"/>
                <img src={facebook} alt="facebook"/>
                <img src={google} alt="google"/>
              </div>
                 </div>
                 
                <br></br><br></br><br></br>
                </div>
             
            </div>
            <div className="col-md-6 rightside " style={{background: "#001224",paddingLeft:"10%"}}>
                {/* <div className="imagecover" style={{position:"relative",top:"8%"}}>
                    <div className="white-truck"><i className="fa-solid fa-truck"></i>
                    <p className="display-6">Safety in your truck</p>
                    </div>
                    <img src={busy} alt="signimg" style={{width:"55%", borderRadius:"10px"}}/>
                    <div className="white-protect"><i className="fa-solid fa-shield"></i>
                    <p className="display-6">24 Hours Protection</p>
                    </div>
                </div><br/><br></br>
                <h1 className="typo text-light mt-5 display-3">
               <span> “</span><br></br>
                The easiest way<br></br> to buy and  manage<br></br> trucking insurance </h1> */}
                <img width="100%" src={rightsider} alt="image"/>
            </div>
        </div>
        </div>
      
        
        </>
    )
}
export default Login