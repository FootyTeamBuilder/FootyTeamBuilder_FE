import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/apiRequest";
import "./register.css";
import Spinner from "../../components/loading/Spinner";

const Register = () => {
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  const handleRegister= (e)=>{
    e.preventDefault();
    const newUser = {
      email: email,
      password:password,
      name:name
    };
    register(newUser,dispatch,navigate);
  }

  return (
    <div className="register-container">
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form className="sign-up-form" onSubmit={handleRegister}>
              <div className="logo">
                <img src="static/images/newLogo.jpg" alt="FEFootball" />
                <h4>FEFootball</h4>
              </div>
              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account? </h6>
                <Link to="/login" className="toggle">
                  Log In
                </Link>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input type="text" className="input-field" onChange={(e)=>setName(e.target.value)} placeholder='Name' />
                  {/* <label>Name</label>  */}
                </div>
                <div className="input-wrap">
                  <input type="text" className="input-field" onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
                  {/* <label>Email</label> */}
                </div>
                <div className="input-wrap">
                  <input type="password" className="input-field" onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
                  {/* <label>Password</label> */}
                </div>
                <button className="sign-btn" type="submit">
                  Sign Up
                </button>
                <p className="text">
                  By signing up, I agree to the 
                  <Link to="#"> Terms of Services</Link> and
                  <Link to="#"> Privacy Policy</Link>
                </p>
              </div>
            </form>
          </div>
          <div className="carousel">
        <div className="images-wrapper">
          <img src="static/images/anh1.jpg" className="image img-1 show" alt="" />
          <img
            src="static/images/anh2.jpg"
            className="image img-2"
            alt=""
          />
          <img src="static/images/anh3.jpg" className="image img-3" alt="" />
        </div>
        <div className="text-slider">
          <div className="text-wrap">
            <div className="text-group">
              <h2>Create your own teams</h2>
              <h2>Customize as you like</h2>
              <h2>Invite your members to your teams</h2>
            </div>
          </div>
          <div className="bullets">
            <span className="active" data-value={1} />
            <span data-value={2} />
            <span data-value={3} />
          </div>
        </div>
          </div>
        </div>
      </div>
      { authState.register.isFetching && <Spinner /> }
    </div>
  );
};

export default Register;
