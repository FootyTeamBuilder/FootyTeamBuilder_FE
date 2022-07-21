import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes, useParams, NavLink } from "react-router-dom";
import Spinner from "../../components/loading/Spinner";
import "./TeamInfo.css";
import "../../components/common/button/Button";
import { requestJoinTeam } from "../../redux/apiRequest";
import { useSelector } from "react-redux";
import MemberList from "../../components/team-info/member-list/MemberList";
import TeamHistory from "../team-history/TeamHistory";
import Comments from "../../components/team-info/Comments/Comments";
import { toast } from "react-toastify";
import { useCallback } from "react";

const TeamInfo = () => {
    const { teamId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [isCaptain, setIsCaptain] = useState(Boolean);
    const [buttonVisible, setButtonVisible] = useState([]);
    const [teamInfo, setTeamInfo] = useState();
    const [openMatching, setOpenMatching] = useState(false);
    const [openJoinTeam, setOpenJoinTeam] = useState(false);
    const [myTeamList, setMyTeamList] = useState([]);
    const [myTeamChosen, setMyTeamChosen] = useState();
    const [area, setArea] = useState('');
    const [time, setTime] = useState();
    const user = useSelector((state) => state.auth.login?.currentUser);

	const getTeamInfo = async () => {
		const response = await axios.get(`/team/view-team/${teamId}`);
		setTeamInfo(response.data);
		setIsLoading(false);
	};

    //kiem tra user la doi truong cua team dang xem hay khong
    const checkIsCaptain = async (teamId) => {
        const response = await axios.get(`/team/is-captain/${teamId}`, {
            headers: { Authorization: `Bearer ${user?.token}` },
        });
        setIsCaptain(response.data.isCaptain);
    };

    //kiem tra user co la thanh vien khong
    const checkIsMember = () => {
        if(teamInfo?.members.filter(t => t.info?._id === user.id).length > 0) return true;
        else return false;
    }

    //kiem tra user co phai la doi truong cua 1 team nao khong
    const checkIsCaptainOfOtherTeam = (myTeamList) => {
        if(myTeamList.length > 0) return true;
        else return false;
    }

    //check nut bat doi va nut xin vao doi co hien khong
    const checkButtonVisibility = () => {
        if(isCaptain) return [false, false];
        else {
            if(checkIsCaptainOfOtherTeam(myTeamList)){
                if(checkIsMember(teamInfo)) return [true, false];
                else return [true, true];
            }
            else {
                if(checkIsMember(teamInfo)) return [false, false];
                else return [false, true];
            }
        }
    }

    const getMyTeamList = async () => {
        const response = await axios.get(`/user/user-team-list/${user?.id}/true`, {
            headers: { Authorization: `Bearer ${user?.token}` }
        });
        setMyTeamList(response.data.teams);
    }

	const addOpponent = async (matchInfo) => {
		try {
			const response = await axios.put(`/team/add-opponent`, matchInfo, {
				headers: { Authorization: `Bearer ${user?.token}` },
			});

			if (response.status === 201) {
				toast.success("Đã gửi lời thách đấu");
			}
		} catch (error) {
			toast.error("Không gửi được lời thách đấu");
		}
	};

    useEffect(() => {
        getTeamInfo();
        getMyTeamList();
        checkIsCaptain(teamId);
    }, []);

    useEffect(() => {
        setButtonVisible(checkButtonVisibility());
    }, [isCaptain, myTeamList, teamInfo])

    // console.log(isCaptain, checkIsCaptainOfOtherTeam(myTeamList), checkIsMember(teamInfo),buttonVisible);

    if (isLoading) return <Spinner />;
    console.log(teamInfo)
    return (
        <div className="team-info">
            <div className="team-info-detail">
                <img
                    src={teamInfo.team.logo}
                    alt=""
                    className="avatar"
                />{" "}
                {/* thay bang logo */}
                <div className="right">
                    <h1>{teamInfo.team.name}</h1>
                    <div className="info-detail">
                        <div className="grid-item">
                            <span>Giới thiệu:</span> {teamInfo.team.description}
                        </div>
                        <div className="grid-item">
                            <span>Trình độ:</span> {teamInfo.team.level}
                        </div>
                        <div className="grid-item">
                            <span>Độ tuổi:</span> {teamInfo.team.age.minAge} -{" "}
                            {teamInfo.team.age.maxAge}
                        </div>
                        <div className="grid-item">
                            <span>Khu vực:</span> {teamInfo.team.area}
                        </div>
                        {/* <div className="grid-item">
                            <span>Áo đấu:</span> {teamInfo.team.kits}
                        </div>
                        <div className="grid-item">
                            <span>Thời gian chơi bóng:</span>{" "}
                            {teamInfo.team.time}
                        </div> */}
                    </div>
                    {
                        buttonVisible[0] &&
                        <button
                            className="matching-btn"
                            onClick={(e) => setOpenMatching(true)}
                        >
                            Bắt đối
                        </button>
                    }
                    {
                        buttonVisible[1] &&
                        <button
                            className="join-team-btn"
                            onClick={(e) => setOpenJoinTeam(true)}
                        >
                            Tham gia đội
                        </button>
                    }
                </div>
            </div>
            <div className="navigate-bar">
                <NavLink
                    to={`/team-info/${teamId}/member-list`}
                    className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                    }
                >
                    Danh sách thành viên
                </NavLink>
                <NavLink
                    to={`/team-info/${teamId}/match-history`}
                    className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                    }
                >
                    Lịch sử đấu
                </NavLink>
                <NavLink
                    to={`/team-info/${teamId}/comments`}
                    className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                    }
                >
                    Bình luận
                </NavLink>
            </div>

			<Routes>
				<Route index element={<MemberList teamInfo={teamInfo} />} />
				<Route
					path="member-list"
					element={<MemberList teamInfo={teamInfo} />}
				/>
				<Route path="match-history" element={<TeamHistory />} />
				<Route
					path="comments"
					element={<Comments teamInfo={teamInfo} />}
				/>
			</Routes>

			{openMatching && (
				<div className="matching-form">
					<div className="content">
						<button
							className="close"
							onClick={(e) => setOpenMatching(false)}
						>
							X
						</button>
						<div className="title">Thư mời</div>

						<select
							className="my-team-list"
							defaultValue={null}
							onChange={(e) => setMyTeamChosen(e.target.value)}
						>
							<option value="" selected disabled hidden>
								Chọn đội của bạn
							</option>
							{myTeamList.map((m) => {
								return (
									<option key={m.team._id} value={m.team._id}>
										{m.team.name}
									</option>
								);
							})}
						</select>

						<input
							type="text"
							placeholder="Địa điểm trận đấu"
							onChange={(e) => setArea(e.target.value)}
						/>
						<input
							type="datetime-local"
							onChange={(e) => setTime(e.target.value)}
						/>
						<button
							className="submit"
							onClick={(e) =>
								addOpponent({
									teamId: myTeamChosen,
									opponentId: teamId,
									area: area,
									time: time,
								})
							}
						>
							Gửi
						</button>
					</div>
					<div
						className="background"
						onClick={(e) => setOpenMatching(false)}
					></div>
				</div>
			)}
			{openJoinTeam && (
				<div className="join-team-confirm">
					<div className="content">
						<h2>Bạn có xác nhận yêu cầu tham gia đội không?</h2>
						<div>
							<button
								className="confirm"
								onClick={(e) => {
									requestJoinTeam(teamId, user?.token);
									setOpenJoinTeam(false);
								}}
							>
								Xác nhận
							</button>
							<button
								className="cancel"
								onClick={(e) => setOpenJoinTeam(false)}
							>
								Huỷ
							</button>
						</div>
					</div>
					<div
						className="background"
						onClick={(e) => setOpenJoinTeam(false)}
					></div>
				</div>
			)}
		</div>
	);
};

export default TeamInfo;
