import React from "react";
import "./editTeam.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editTeamInfo } from "../../redux/apiRequest";


const EditTeam = () => {
  const user = useSelector((state)=> state.auth.login?.currentUser);
  const teamInitial = useSelector((state)=> state.team.newTeam?.teamInfo);
  const teamId = useSelector((state)=> state.team.newTeam?.messageTeam.id);
  const teamEdit = useSelector((state)=> state.team.editTeam?.teamInfo);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("vui vẻ");
  const [minage, setMinage] = useState();
  const [maxage, setMaxage] = useState();
  const [area, setArea] = useState("");
  const [kits, setKits] = useState("");
  const [logo, setLogo] = useState("");
  const [time, setTime] = useState();

  const dispatch = useDispatch();
  
  const handleEdit = (e) => {
    e.preventDefault(); 
    const teamInfo = {
      name : name,
      minAge : minage,
      maxAge: maxage,
      level: level,
      description: description,
      area: area,
      kits: kits,
      logo: logo,
      time: time,
    };
    
    console.log(teamId,typeof teamId,teamInfo, typeof teamInfo);
    editTeamInfo(teamInfo,dispatch,teamId,user?.token);
  };

  return (
    <div className="updateWrapper">
      <div className="updateContainer">
        <div className="heading">Edit your team</div>
        <form>
          <div className="card">
            <div className="formAvatar">
              <label className="labelInfor">Team Logo</label>
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
                <label className="labelInfor">Area</label>
                <input
                  className="formInput"
                  type="text"
                  placeholder="Enter your area"
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>
              <div className="formItem">
                <label className="labelInfor">Time</label>
                <input
                  className="formInput"
                  type="datetime-local"
                  placeholder="Enter your area"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div className="formItem">
                <label className="labelInfor">Kits</label>
                <input
                  className="formInput"
                  type="checkbox"
                  placeholder="Enter your kits"
                  onChange={(e) => setKits(e.target.value)}
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
            onClick={handleEdit}
          >
            Update
          </button>
             
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTeam;
//name,dateOfBirth,avatar,password,achivements,phonenumber,email,
