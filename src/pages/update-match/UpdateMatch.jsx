import { useState } from "react";
import "./UpdateMatch.css";
import Timeline from "@mui/lab/Timeline";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { useEffect } from "react";
import TimelineComponent from "../../components/update-match/timeline-item/TimelineComponent";
import axios from "axios";
import Spinner from "../../components/loading/Spinner";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const UpdateMatch = () => {
	const { state } = useLocation();
	const [matchInfo, setMatchInfo] = useState(state);
	const [isCaptainTeam1, setIsCaptainTeam1] = useState();
	const [scoreTeam1, setScoreTeam1] = useState(0);
	const [scoreTeam2, setScoreTeam2] = useState(0);
	const [team1Members, setTeam1Members] = useState();
	const [team2Members, setTeam2Members] = useState();
	const [selectedTeam1Member, setSelectedTeam1Member] = useState();
	const [selectedTeam2Member, setSelectedTeam2Member] = useState();
	const [minuteScore1, setMinuteScore1] = useState();
	const [minuteScore2, setMinuteScore2] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const user = useSelector((state) => state.auth.login?.currentUser);
	const navigate = useNavigate();

	const getTeamMembers = async (team1Id, team2Id) => {
		const response1 = await axios.get(`/team/view-team/${team1Id}`);
		setTeam1Members(response1.data);
		const response2 = await axios.get(`/team/view-team/${team2Id}`);
		setTeam2Members(response2.data);
		setIsLoading(false);
	};

	const updateMatch = async (matchId) => {
		try {
			await axios.post(
				`/team/update-match/${matchId}`,
				{
					team1Score: scoreTeam1,
					team2Score: scoreTeam2,
					matchRecord: matchInfo.matchRecord,
				},
				{
					headers: { Authorization: `Bearer ${user?.token}` },
				}
			);
			toast.success("Cập nhật lịch sử đấu thành công");
		} catch (error) {
			toast.error(error);
		}
	};

	//kiem tra user la doi truong team1 hay team2
	const checkUser = async (teamId) => {
		const response = await axios.get(`/team/is-captain/${teamId}`, {
			headers: { Authorization: `Bearer ${user?.token}` },
		});
		return response.data.isCaptain;
	};

	//xoa phan tu khoi mang matchRecord
	const deleteMatchRecord = (id) => {
		const index = matchInfo.matchRecord.findIndex((match) => {
			return match._id === id;
		});
		matchInfo.matchRecord.splice(index, 1);

		if (isCaptainTeam1) setScoreTeam1((s) => (s -= 1));
		else setScoreTeam2((s) => (s -= 1));

		console.log("xoa");
	};

	//tinh so ban thang
	const countTeam1Goals = () => {
		const count =
			matchInfo.matchRecord.filter((mr) => {
				if (mr.isTeam1 === true) return true;
				else return false;
			}).length + 1;
		return count;
	};
	const countTeam2Goals = () => {
		const count =
			matchInfo.matchRecord.filter((mr) => {
				if (mr.isTeam1 === false) return true;
				else return false;
			}).length + 1;
		return count;
	};

	useEffect(() => {
		getTeamMembers(state.team1.teamId, state.team2.teamId);
		matchInfo.matchRecord.sort(function (a, b) {
			return a.minute - b.minute;
		});
	}, [matchInfo.matchRecord]);

	useEffect(() => {
		checkUser(matchInfo.team1.teamId).then((res) => {
			if (res === true) {
				setScoreTeam1(matchInfo.team1.score1);
				setScoreTeam2(matchInfo.team2.score1);
				setIsCaptainTeam1(true);
			} else {
				setScoreTeam1(matchInfo.team1.score2);
				setScoreTeam2(matchInfo.team2.score2);
				setIsCaptainTeam1(false);
			}
		});
	}, []);

	useEffect(() => {
		console.log(matchInfo.matchRecord);
	}, [matchInfo.matchRecord]);

	//xep cac ban thang theo thu tu thoi gian
	matchInfo.matchRecord.sort(function (a, b) {
		return a.minute - b.minute;
	});

	if (isLoading) return <Spinner />;

	return (
		<>
			<div className="update-match">
				<div>
					<img
						src={require("../../assets/blank-avatar.jpg")}
						alt=""
					/>
					<h1 className="team1Name">{matchInfo.team1.name}</h1>
				</div>
				<input
					type="number"
					defaultValue={0}
					readOnly={isCaptainTeam1}
					onChange={(e) => setScoreTeam1(e.target.value)}
					value={scoreTeam1}
				></input>
				<div className="info">
					<div className="time">
						{moment(matchInfo.time).format("LLLL")}
					</div>
					<div className="location">{matchInfo.area}</div>
				</div>
				<input
					type="number"
					defaultValue={0}
					readOnly={!isCaptainTeam1}
					onChange={(e) => setScoreTeam2(e.target.value)}
					value={scoreTeam2}
				></input>
				<div>
					<img
						src={require("../../assets/blank-avatar.jpg")}
						alt=""
					/>
					<h1 className="team2Name">{matchInfo.team2.name}</h1>
				</div>
				<button
					className="confirm"
					onClick={(e) => {
						updateMatch(matchInfo._id);
						navigate(-1);
					}}
				>
					Xác nhận kết quả
				</button>
				<div className="status">
					Trạng thái: <span>{matchInfo.status}</span>{" "}
				</div>
			</div>

			<div className="input-match">
				{isCaptainTeam1 && (
					<div className="input-div left">
						<form action="">
							<label htmlFor=".players-select">
								Chọn cầu thủ
							</label>
							<select
								id="players-select"
								defaultValue={team1Members.captainUser.name}
								onChange={(e) =>
									setSelectedTeam1Member(e.target.value)
								}
							>
								<option
									key={0}
									selected
									disabled
									hidden
								></option>
								<option
									key={team1Members.captainUser._id}
									value={team1Members.captainUser._id}
								>
									{team1Members.captainUser.name}
								</option>
								{team1Members.members.map((m) => {
									return (
										<option
											value={m.info?._id}
											key={m.info?._id}
										>
											{m.info?.name}
										</option>
									);
								})}
							</select>
							<label htmlFor=".score-input">Ghi bàn phút</label>
							<input
								type="number"
								id="score-input"
								placeholder="vd: 50"
								onChange={(e) =>
									setMinuteScore1(e.target.value)
								}
							></input>
							<button
								className="confirm"
								onClick={(e) => {
									e.preventDefault();
									setMatchInfo({
										...matchInfo,
										matchRecord: [
											...matchInfo.matchRecord,
											{
												memberId: selectedTeam1Member,
												isTeam1: true,
												minute: minuteScore1,
											},
										],
									});
									setScoreTeam1(countTeam1Goals());
								}}
							>
								Xác nhận
							</button>
						</form>
					</div>
				)}
				<div className="score-div">
					<Timeline position="alternate">
						{matchInfo.matchRecord.map((m) => {
							return (
								<TimelineComponent
									key={m._id}
									time={m.minute}
									memberId={m.memberId}
									isTeam1={m.isTeam1}
									isCaptainTeam1={isCaptainTeam1}
									deleteMatchRecord={(e) =>
										deleteMatchRecord(m._id)
									}
								/>
							);
						})}
					</Timeline>
				</div>
				{!isCaptainTeam1 && (
					<div className="input-div right">
						<form action="">
							<label htmlFor=".players-select">
								Chọn cầu thủ
							</label>
							<select
								id="players-select"
								defaultValue={team2Members.captainUser.name}
								onChange={(e) =>
									setSelectedTeam2Member(e.target.value)
								}
							>
								<option
									key={team2Members.captainUser._id}
									selected
									disabled
									hidden
								></option>
								<option
									key={team2Members.captainUser._id}
									value={team2Members.captainUser._id}
								>
									{team2Members.captainUser.name}
								</option>
								{team2Members.members.map((m) => {
									return (
										<option
											value={m.info?._id}
											key={m.info?._id}
										>
											{m.info?.name}
										</option>
									);
								})}
							</select>
							<label htmlFor=".score-input">Ghi bàn phút</label>
							<input
								type="number"
								id="score-input"
								placeholder="vd: 50"
								onChange={(e) =>
									setMinuteScore2(e.target.value)
								}
							></input>
							<button
								className="confirm"
								onClick={(e) => {
									e.preventDefault();
									setMatchInfo({
										...matchInfo,
										matchRecord: [
											...matchInfo.matchRecord,
											{
												memberId: selectedTeam2Member,
												isTeam1: false,
												minute: minuteScore2,
											},
										],
									});
									setScoreTeam2(countTeam2Goals());
								}}
							>
								Xác nhận
							</button>
						</form>
					</div>
				)}
			</div>
		</>
	);
};

export default UpdateMatch;
