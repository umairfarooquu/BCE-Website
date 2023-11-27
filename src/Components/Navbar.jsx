import logo from "../Assets/images/g10.png"
import { Link } from "react-router-dom"
import "./Navbar.css"
import checkshield from "../Assets/images/ShieldCheck.png"
function Navbar(){
  
    return(
        <>
        <div className="container">
               <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="#">
      <img src={logo} alt="logo" width="80px"/>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{backgroundColor:"white"}}
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li className="nav-item mx-2">
          <Link className="nav-link  text-light" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item mx-2 dropdown">
          <Link
            className="nav-link dropdown-toggle text-light"
            to="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"

          >
            Product & Service
          </Link>
          <ul className="dropdown-menu insurence " >
            <li>
              <Link className="dropdown-item " to="/autoliability">
              Auto liability insurance
              </Link>
            </li>
            <li>
              <Link className="dropdown-item " to="/generalinsurance">
              General liability insurance
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/Motorinsurance">
              Motor truck cargo insurance
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/Physicalinsurance">
              Physical damage insruance
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link text-light" to="#">
        FAQ & Resourse
          </Link>
        </li>
       
        <li className="nav-item mx-2">
          <Link className="nav-link text-light" to="/aboutus">
About us           </Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link  text-light" to="signup">
Sign up           </Link>
        </li>
      </ul>
      <div className="d-flex" role="search">
        <Link to="/login">
      <button className="btn px-5 mx-2  bg-dark text-light" style={{borderColor:"white"}} type="submit"> Login
        </button></Link>
        <button className="btn btn-light border border-dark loginbtn bg-light px-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >
          Get a Qoute
        </button>
      </div>
    </div>
  </div>
</nav>
        </div>
     

<div class="offcanvas offcanvas-end mt-5 mb-5 mx-5 rounded" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel"><b>Get a Quote right now</b></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <span className="smalltext">Sign up and our team will contact you to provide your quote</span>
  <div className="form mt-4 maincard mx-3 border-bottom" style={{width:"90%"}}>
                 <input className="form-control mb-3 signupinputs" type="text" placeholder="Your Name" aria-label="Your Name"/>
                 <input className="form-control mb-3 signupinputs" type="text" placeholder="E-mail" aria-label="E-mail"/>
                 <input className="form-control mb-3 signupinputs" type="number" placeholder="Phone number" aria-label="default input example"/>
                 <button className="btn btn-dark" style={{width:"100%"}}>I want to be a customer</button>
                 <p className=" mt-3 smalltext">By submitting your data, you authorize us to contact you, To find out more, see our Privacy policy</p>

                 </div>
                 <div className="d-flex align-items-center mt-2">
                  <img src={checkshield} width="25px" alt="check"/> &nbsp; 
                  <b style={{fontSize:"small"}}>Your data is safe with us</b>
                 </div>
  </div>
</div>
        </>
    )
}
export default Navbar