import "./Header.css";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Button from "../common/button/Button";
import { useState } from "react";
import goalImg from "../../assets/goal.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/apiRequest";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const LoginHeader = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpenProfileDropdown, setIsOpenProfileDropdown] = useState(false);
	const [isOpenNoti, setIsOpenNoti] = useState(false);

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset <= 0 ? false : true);
	};

	return (
		<div className={isScrolled ? "header is-scrolled" : "header"}>
			<div className="header-child">
				<Link to="/">
					<img src={goalImg} style={{ width: "3.5rem" }} alt="" />
				</Link>
				<span className="web-name">FootballTeam</span>
			</div>
			<div className="header-child right">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? "active" : "inactive"
					}
				>
					Trang chủ
				</NavLink>
				<NavLink
					to="/all-team"
					className={({ isActive }) =>
						isActive ? "active" : "inactive"
					}
				>
					Đội bóng
				</NavLink>
				<NavLink
					to="/league"
					className={({ isActive }) =>
						isActive ? "active" : "inactive"
					}
				>
					Giải đấu
				</NavLink>
				<NavLink
					to="/contact"
					className={({ isActive }) =>
						isActive ? "active" : "inactive"
					}
				>
					Liên hệ
				</NavLink>
				<div style={{ position: "relative" }}>
					<NotificationsNoneIcon
						sx={{
							color: "#63A44C",
							fontSize: "2rem",
							cursor: "pointer",
						}}
						onClick={(e) => {
							setIsOpenNoti(!isOpenNoti);
							setIsOpenProfileDropdown(false);
						}}
					/>
					<div className={isOpenNoti ? "noti is-opened" : "noti"}>
						{/* se sua thanh map */}
						<div className="noti-item">
							<img src={require("../../assets/pep.jpg")} alt="" />
							<div>
								<p>Content</p>
								<span>1 Ngày trước</span>
							</div>
						</div>
						<div className="noti-item">
							<img src={require("../../assets/pep.jpg")} alt="" />
							<div>
								<p>Content</p>
								<span>1 Ngày trước</span>
							</div>
						</div>
					</div>
				</div>
				<div style={{ position: "relative" }}>
					<img
						src={require("../../assets/blank-avatar.jpg")}
						alt=""
						className="avatar"
						onClick={(e) => {
							setIsOpenProfileDropdown(!isOpenProfileDropdown);
							setIsOpenNoti(false);
						}}
					/>
					<div
						className={
							isOpenProfileDropdown
								? "dropdown-profile is-opened"
								: "dropdown-profile"
						}
					>
						<Link to="edit-information">
							<AccountBoxIcon /> Hồ sơ của tôi
						</Link>
						<Link to="#">
							<GroupIcon /> Hồ sơ đội bóng
						</Link>
						{/* <Link
							to="/login"
							onClick={(e) => logOut(dispatch, navigate)}
						></Link> */}
						<Link to="/update-match">
							<SportsSoccerIcon /> Trận đấu của tôi
						</Link>
						<Link
							to="/login"
							onClick={(e) => logOut(dispatch, navigate)}
						>
							<LogoutIcon /> Đăng xuất
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginHeader;
