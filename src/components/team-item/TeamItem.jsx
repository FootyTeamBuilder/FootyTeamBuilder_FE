import "./TeamItem.css";

const TeamItem = ({ avatar, name, level, onClick }) => {
	return (
		<div className="team-item" onClick={onClick}>
			{/* <img src={require(`../../assets/${avatar}`)} className='team-avatar' alt="" /> */}
			{/* <img src={avatar} className="team-avatar" alt="" /> */}
			{avatar === "blank-avatar.jpg" ? (
				<img
					// height={300}
					// width={300}
					src={require(`../../assets/${avatar}`)}
					className="team-avatar"
					alt=""
				/>
			) : (
				<img
					// height={300}
					// width={300}
					src={avatar}
					className="team-avatar"
					alt=""
				/>
			)}
			<div className="name">{name}</div>
			<hr />
			<span className="level">Trình độ: {level} </span>
			<hr />
			<p>Thành viên</p>
			{/* truyen vao danh sach cac thanh vien */}
		</div>
	);
};

export default TeamItem;
