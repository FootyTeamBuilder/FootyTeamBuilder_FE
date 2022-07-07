import axios from "axios";
import React, { useState } from "react";

const BASEURL = "http://localhost:8080/user/edit-information";

const UploadImage = () => {
	const [avatar, setAvatar] = useState("");

	const onFileChange = (e) => {
		e.preventDefault();
		console.log("e.target.files[0] ", e.target.files[0]);
		setAvatar(e.target.files[0]);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("avatar", avatar);
		axios.put(BASEURL, formData, {}).then((res) => {
			console.log(res);
		});
	};

	return (
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
	);
};

export default UploadImage;
