import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import MemberItem from "../../member-item/MemberItem";

const MemberList = ({ teamInfo }) => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.auth.login?.currentUser);
	let isCaptain;
	if (user?.id === teamInfo.captain.userId) {
		isCaptain = true;
	} else {
		isCaptain = false;
	}
	const { teamId } = useParams();
	return (
		<div className="members">
			<div className="members-grid">
				<MemberItem
					captainUserId={teamInfo.captain.userId}
					avatar={teamInfo.captainUser.avatar}
					name={teamInfo.captainUser.name}
					role={teamInfo.captain.role}
					nickname={teamInfo.captain.nickname}
					number={teamInfo.captain.number}
					teamId={teamInfo.captain.teamId}
					memberId={teamInfo.captain._id}
				/>
				{teamInfo.members.map((t) => {
					console.log(t.info);
					if (t.info == null) {
						t.info = {};
					}
					return (
						<MemberItem
							key={t.member._id}
							captainUserId={teamInfo.captain.userId}
							avatar={
								t.info.avatar
									? t.info.avatar
									: "blank-avatar.jpg"
							}
							// avatar={"src/assets/blank-avatar.jpg"}
							name={t.info?.name}
							role={t.member.role}
							nickname={t.member.nickname}
							number={t.member.number}
							teamId={t.member.teamId}
							memberId={t.member._id}
						/>
					);
				})}
				{isCaptain ? (
					<IconButton
						aria-label="edit"
						onClick={(e) => {
							navigate(`/create-member/${teamId}`);
							window.scrollTo(0, 0);
						}}
					>
						<AddCircleIcon />
					</IconButton>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default MemberList;
