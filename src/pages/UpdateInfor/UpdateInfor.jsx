import React from "react";
import "./updateInfor.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateInformation } from "../../redux/apiRequest";

const UpdateInfor = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const currentInfo2 = 
    useSelector((state) => state.user.userInfo?.currentInfo)
  ;
  const [name, setName] = useState(currentInfo2.name ? currentInfo2.name : "");
  const [email, setEmail] = useState(
    currentInfo2 ? currentInfo2.email : currentInfo2.email
  );
  const [phonenumber, setPhonenumber] = useState(
    currentInfo2 ? currentInfo2.phonenumber : ""
  );
  const [achivements, setAchievements] = useState(
    currentInfo2 ? currentInfo2.achivements : null
  );
  const [password, setPassword] = useState(
    currentInfo2.password
  );

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    const userInfo = {
      name: name,
      email: email,
      achivements: achivements,
      phonenumber: phonenumber,
      password: password,
    };
    updateInformation(userInfo, dispatch, user?.token);
  };

  return (
    <div className="updateWrapper">
      <div className="updateContainer">
        <div className="heading">User Information</div>
        <form>
          <div className="card">
            <div className="formAvatar">
              <label className="labelInfor">Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="static/images/anh1.jpg"
                  alt="avatar"
                />
              </div>
            </div>
            <div className="card-details">
              <div className="formItem">
                <label className="labelInfor">Username</label>
                <input
                  value={name}
                  className="formInput"
                  type="text"
                  placeholder="Enter your username"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formItem">
                <label className="labelInfor">Email</label>
                <input
                  value={email}
                  className="formInput"
                  type="text"
                  placeholder="Enter your email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formItem">
                <label className="labelInfor">Date of birth</label>
                <input
                  className="formInput"
                  type="text"
                  placeholder="Enter your dateOfBirth"
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formItem">
                <label className="labelInfor">Achivements</label>
                <input
                  value={achivements}
                  className="formInput"
                  type="text"
                  placeholder="Enter your achivements"
                  onChange={(e) => setAchievements(e.target.value)}
                />
              </div>
              <div className="formItem">
                <label className="labelInfor">Phone Number</label>
                <input
                  value={phonenumber}
                  className="formInput"
                  type="text"
                  placeholder="Enter your phone number"
                  
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </div>
              <div className="formItem">
                <label className="labelInfor">Password</label>
                <input
                  className="formInput"
                  type="password"
                  value={password}
                  // placeholder="Enter your password"
                  // onChange={(e) => setPassword(e.target.value)}
                  readOnly={true}
                />
              </div>
            </div>
          </div>
          <div className="buttonUpdate">
            <button
              // disabled={`user.pending`}
              className="updateButton"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
          {/* {user.error && <span className="error">Something went wrong!</span>}
          {user.pending === false && (
            <span className="success">Account has been updated!</span>
          )} */}
        </form>
      </div>
    </div>
  );
};

export default UpdateInfor;
//name,dateOfBirth,avatar,password,achivements,phonenumber,email,
