import React from "react";
import "./createTeam.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { createNewTeam } from "../../redux/apiRequest";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASEURL = "http://localhost:8080/team/image";

const CreateTeam = () => {
	const user = useSelector((state) => state.auth.login?.currentUser);
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [area, setArea] = useState("");
	const [level, setLevel] = useState("vui vẻ");
	const [minage, setMinage] = useState();
	const [maxage, setMaxage] = useState();
	const [logo, setLogo] = useState("/static/images/newLogo.jpg");
	const [avatarUrl, setAvatarUrl] = useState();

	const dispatch = useDispatch();

	const handleCreate = (e) => {
		e.preventDefault();
		const newTeam = {
			name: name,
			minAge: minage,
			maxAge: maxage,
			level: level,
			description: description,
			area: area,
			logo: logo,
		};
		createNewTeam(newTeam, dispatch, user?.token);
		navigate("/all-my-team");
		console.log(user?.token);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("logo", avatarUrl);
		formData.append("logoName", avatarUrl.name);
		//hieufix - not working right now
		axios
			.post(`${BASEURL}`, formData, {
				headers: { Authorization: `Bearer ${user?.token}` },
			})
			.then((res) => {
				console.log(res);
				setLogo(res.data.data);
			});
	};

	const onFileChange = (e) => {
		e.preventDefault();
		if (e.target.files && e.target.files[0]) {
			setLogo(URL.createObjectURL(e.target.files[0]));
			setAvatarUrl(e.target.files[0]);
		}
	};

	return (
		<div className="updateWrapper">
			<div className="updateContainer">
				<div className="heading">Create your new team</div>
				<div className="contain">
					<div>
						<div className="formAvatar">
							<label className="labelInfor">Team Logo</label>
							<div className="profilePic">
								<img
									className="avatar"
									src={logo}
									alt="avatar"
								/>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<form onSubmit={onSubmit}>
									<div className="form-group">
										<input
											type="file"
											onChange={onFileChange}
										/>
									</div>
									<div className="form-group">
										<button
											className="btn btn-primary"
											type="submit"
										>
											Upload
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<form>
						<div className="card">
							<div className="card-details">
								<div className="formItem">
									<label className="labelInfor">Team </label>
									<input
										className="formInput"
										type="text"
										placeholder="Enter your team name"
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
								</div>
								<div className="formItem">
									<label className="labelInfor">
										Description
									</label>
									<input
										className="formInput"
										type="text"
										placeholder="Enter team description"
										onChange={(e) =>
											setDescription(e.target.value)
										}
									/>
								</div>
								<div className="formItem">
									<label className="labelInfor">Area</label>
									<input
										className="formInput"
										type="text"
										placeholder="Enter team area"
										onChange={(e) =>
											setArea(e.target.value)
										}
									/>
								</div>
								<div className="formItem">
									<label className="labelInfor">
										Min Age
									</label>
									<input
										className="formInput"
										type="number"
										placeholder="Enter number "
										onChange={(e) =>
											setMinage(e.target.value)
										}
									/>
								</div>
								<div className="formItem">
									<label className="labelInfor">
										Max Age
									</label>
									<input
										className="formInput"
										type="number"
										placeholder="Enter number"
										onChange={(e) =>
											setMaxage(e.target.value)
										}
									/>
								</div>
								<div className="formItem">
									<label className="labelInfor">Level</label>
									<select
										className="formSelect"
										onChange={(e) =>
											setLevel(e.target.value)
										}
									>
										<option value="vui vẻ">vui vẻ</option>
										<option value="yếu">yếu</option>
										<option value="trung bình">
											trung bình
										</option>
										<option value="khá">khá</option>
										<option value="bán chuyên">
											bán chuyên
										</option>
										<option value="chuyên nghiệp">
											chuyên nghiệp
										</option>
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
		</div>
	);
};

export default CreateTeam;
//name,dateOfBirth,avatar,password,achivements,phonenumber,email,
