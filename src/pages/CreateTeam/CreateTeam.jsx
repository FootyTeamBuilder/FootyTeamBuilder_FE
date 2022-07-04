  import React from "react";
  import "./createTeam.css";
  import { useSelector, useDispatch } from "react-redux";
  import { useState } from "react";
  import { createNewTeam } from "../../redux/apiRequest";


  const CreateTeam = () => {
    const user = useSelector((state)=> state.auth.login?.currentUser);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [level, setLevel] = useState("vui vẻ");
    const [minage, setMinage] = useState();
    const [maxage, setMaxage] = useState();
    const team = useSelector((state) => state.team);
    const dispatch = useDispatch();
    
    const handleCreate = (e) => {
      e.preventDefault();
      const newTeam = {
        name : name,
        minAge : minage,
        maxAge: maxage,
        level: level,
        description: description,
      };
      createNewTeam(newTeam,dispatch,user?.token);
      console.log(user?.token)
    };

    return (
      <div className="updateWrapper">
        <div className="updateContainer">
          <div className="heading">Create your new team</div>
          <form>
            <div className="card">
              <div className="formAvatar">
                <label className="labelInfor">Team Avatar</label>
                <div className="profilePic">
                  <img className="avatar" src="static/images/anh1.jpg" alt="avatar" />
                </div>
              </div>
              <div className="card-details">
                <div className="formItem">
                  <label className="labelInfor">Team </label>
                  <input
                    className="formInput"
                    type="text"
                    placeholder='Enter your team name'
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="formItem">
                  <label className="labelInfor">Description</label>
                  <input
                    className="formInput"
                    type="text"
                    placeholder='Enter team description'
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="formItem">
                  <label className="labelInfor">Min Age</label>
                  <input
                    className="formInput"
                    type="number"
                    placeholder="Enter number > 18"
                    onChange={(e) => setMinage(e.target.value)}
                  />
                </div>
                <div className="formItem">
                  <label className="labelInfor">Max Age</label>
                  <input
                    className="formInput"
                    type="number"
                    placeholder="Enter number < 35"
                    onChange={(e) => setMaxage(e.target.value)}
                  />
                </div>
                <div className="formItem">
                  <label className="labelInfor">Level</label>
                  <select className="formSelect" onChange={(e) => setLevel(e.target.value)}>
                    <option value="vui vẻ">vui vẻ</option>
                    <option value="yếu">yếu</option>
                    <option value="trung bình">trung bình</option>
                    <option value="khá">khá</option>
                    <option value="bán chuyên">bán chuyên</option>
                    <option value="chuyên nghiệp">chuyên nghiệp</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="buttonUpdate">
            <button
              // disabled={`user.pending`}
              className="updateButton"
              onClick={handleCreate}
            >
              Create
            </button>
              
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default CreateTeam;
  //name,dateOfBirth,avatar,password,achivements,phonenumber,email,
