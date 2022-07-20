import React from "react";
import "./updateInfor.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateInformation } from "../../redux/apiRequest";
import axios from "axios";

const BASEURL = "http://localhost:8080/user/image";

const UpdateInfor = () => {
	const user = useSelector((state) => state.auth.login?.currentUser);
	const info = useSelector((state) => state.user.userInfo?.pending);
	const currentInfo2 = useSelector(
		(state) => state.user.userInfo?.currentInfo
	);
	const [avatar, setAvatar] = useState(
		currentInfo2 ? currentInfo2.avatar : "static/images/anh1.jpg"
	);

	const [avatarUrl, setAvatarUrl] = useState(
		currentInfo2 ? currentInfo2.avatar : "static/images/anh1.jpg"
	);

	const [name, setName] = useState(currentInfo2 ? currentInfo2.name : "");
	const [email, setEmail] = useState(
		currentInfo2 ? currentInfo2.email : currentInfo2.email
	);
	const [phonenumber, setPhonenumber] = useState(
		currentInfo2 ? currentInfo2.phonenumber : ""
	);
	const [achivements, setAchievements] = useState(
		currentInfo2 ? currentInfo2.achivements : ""
	);
	const [dateOfBirth, setDateOfBirth] = useState(
		currentInfo2.dateOfBirth
			? currentInfo2.dateOfBirth.substring(0, 10)
			: ""
	);

	const [password, setPassword] = useState(user.password);

	const dispatch = useDispatch();

	const handleUpdate = (e) => {
		e.preventDefault();
		const [year, month, day] = dateOfBirth.split("-");
		const userInfo = {
			name: name,
			email: email,
			avatar: avatar,
			achivements: achivements,
			phonenumber: phonenumber,
			dateOfBirth: new Date(+year, +month - 1, +day + 1),
		};
		updateInformation(userInfo, dispatch, user?.token);
	};

	const onFileChange = (e) => {
		e.preventDefault();
		if (e.target.files && e.target.files[0]) {
			setAvatar(URL.createObjectURL(e.target.files[0]));
			setAvatarUrl(e.target.files[0]);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("avatar", avatarUrl);
		formData.append("avatarName", avatarUrl.name);
		axios
			.post(BASEURL, formData, {
				headers: { Authorization: `Bearer ${user?.token}` },
			})
			.then((res) => {
				console.log(res);
				setAvatar(res.data.data);
			});
	};

	return (
		<div className="updateWrapper">
			<div className="updateContainer">
				<div className="heading">User Information</div>
				<form>
					<div className="card">
						<div className="formAvatar">
							<label className="labelInfor">
								Profile Picture
							</label>
							<div className="profilePic">
								<img
									width="300px"
									height="300px"
									className="avatar"
									src={avatar}
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
									type="email"
									placeholder="Enter your email address"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="formItem">
								<label className="labelInfor">
									Date of birth
								</label>
								<input
									value={dateOfBirth}
									className="formInput"
									type="date"
									placeholder="Enter your dateOfBirth"
									onChange={(e) =>
										setDateOfBirth(e.target.value)
									}
								/>
							</div>
							<div className="formItem">
								<label className="labelInfor">
									Achivements
								</label>
								<input
									value={achivements}
									className="formInput"
									type="text"
									placeholder="Enter your achivements"
									onChange={(e) =>
										setAchievements(e.target.value)
									}
								/>
							</div>
							<div className="formItem">
								<label className="labelInfor">
									Phone Number
								</label>
								<input
									value={phonenumber}
									className="formInput"
									type="text"
									placeholder="Enter your phone number"
									onChange={(e) =>
										setPhonenumber(e.target.value)
									}
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
							disabled={info}
							className="updateButton"
							onClick={handleUpdate}
						>
							Update
						</button>
					</div>
				</form>
			</div>
			<div className="container">
				<div className="row">
					<form onSubmit={onSubmit}>
						<div className="form-group">
							<input type="file" onChange={onFileChange} />
						</div>
						<div className="form-group">
							<button className="btn btn-primary" type="submit">
								Upload
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UpdateInfor;
//name,dateOfBirth,avatar,password,achivements,phonenumber,email,
