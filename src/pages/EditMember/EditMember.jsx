import React from "react";
import "./editMember.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { createMember, editTeamInfo } from "../../redux/apiRequest";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
const EditMember = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const team = useSelector((state) => state.team.newTeam?.teamInfo);
  const teamId = useSelector((state) => state.team.newTeam?.messageTeam.id);
  const teamEdit = useSelector((state) => state.team.editTeam?.pendingEdit);
  const [name, setName] = useState( "");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [number, setNumber] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [email, setEmail] = useState("");
  const [logo, setLogo] = useState("");
  const [achivements, setAchievements] = useState("");
  const [value, setValue] = React.useState("đội trưởng");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    const teamInfo = {
      name: name,
      number: number,
      logo: logo,
   
    };
    editTeamInfo(teamInfo, dispatch, teamId, user?.token);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    const memberInfo = {
      name: name,
      number: number,
      logo: logo,
   
    };
    createMember(memberInfo, dispatch, teamId, user?.token);
  };

  return (
    <div className="updateWrapper">
      <div className="updateContainer">
        <div className="heading">Edit your member</div>
        <form>
          <div className="card">
            <div className="formAvatar">
              <label className="labelInfor">Member Avatar</label>
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
                <label className="labelInfor">Nickname</label>
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
                  type="email"
                  placeholder="Enter your email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formItem">
                <label className="labelInfor">Date of birth</label>
                <input
                  value={dateOfBirth}
                  className="formInput"
                  type="date"
                  placeholder="Enter your dateOfBirth"
                  onChange={(e) => setDateOfBirth(e.target.value)}
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
                <label className="labelInfor">Number</label>
                <input
                  className="formInput"
                  value={number}
                  type="number"
                  placeholder="Enter number of kit"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="formItem">
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    ROLE
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="đội trưởng"
                      control={<Radio />}
                      label="CAPTAIN"
                    />
                    <FormControlLabel
                      value="thành viên"
                      control={<Radio />}
                      label="MEMBER"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="buttonUpdate">
            <button
              disabled={teamEdit}
              className="updateButton"
              onClick={handleEdit}
            >
              Update
            </button>
          </div>
          <div className="buttonUpdate">
            <button
              disabled={teamEdit}
              className="updateButton"
              onClick={handleEdit}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMember;
