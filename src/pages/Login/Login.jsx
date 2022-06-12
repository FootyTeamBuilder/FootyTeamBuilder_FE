import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    
    e.preventDefault();
    const newUser = {
      password: password,
      email: email
    };
    login(newUser, dispatch, navigate);
  }
  return (
    <div className="login-container">
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form className="sign-in-form" onSubmit={handleLogin}>
              <div className="logo">
                <img src="/static/images/newLogo.jpg" alt="FEFootball" />
                <h4>FEFootball</h4>
              </div>
              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registred yet ? </h6>
                <Link to="/register" className="toggle">
                  Sign up
                </Link>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <label>EMAIL</label>
                  <input
                    type="text"
                    // placeholder="Enter your username"
                    className="input-field"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-wrap">
                  <label>PASSWORD</label>
                  <input
                    type="password"
                    // placeholder="Enter your password"
                    className="input-field"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="sign-btn">
                  Sign In
                </button>
                <p className="text">
                  Forgotten your password or you login datails?
                  <Link to="#">Get help</Link> signing in
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
    </div>
  );
};

export default Login;
