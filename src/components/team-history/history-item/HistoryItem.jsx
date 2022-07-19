import moment from "moment";
import Timeline from "@mui/lab/Timeline";
import TimelineComponent from "../../update-match/timeline-item/TimelineComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './HistoryItem.css';

const HistoryItem = ({match, isCaptain}) => {

    const navigate = useNavigate();
    const [openTimeline, setOpenTimeline] = useState(false);

    const processScore = (score1, score2) => {
        if(match.status !== 'none'){
            if (score1 > score2) return ["Thắng", "#5dd469"];
            else if (score1 < score2) return ["Thua", "#e34f4f"];
            else if (score1 === score2) return ["Hoà", "#A6D1E6"];
        } else {
            return ["", "gray"];
        }
    };

    return (
        <div>
            <div className="match-item" key={match._id} onClick={(e) => setOpenTimeline(!openTimeline)}>
                <div
                    className="left"
                    style={{
                        backgroundColor: processScore(
                            match.team1?.score1,
                            match.team2?.score1
                        )[1],
                    }}
                >
                    {processScore(match.team1?.score1, match.team2?.score1)[0]}
                </div>
                <div className="middle">
                    <div className="score-middle">
                        <p className="team">{match.team1.name}</p>
                        <img
                            src={require("../../../assets/blank-avatar.jpg")}
                            className="avatar"
                            alt=""
                        />
                        <p className="score">
                            {match.status === "conflict" ? "?" : match.team1.score1}
                        </p>
                        <p>-</p>
                        <p className="score">
                            {match.status === "conflict" ? "?" : match.team2.score1}
                        </p>
                        <img
                            src={require("../../../assets/blank-avatar.jpg")}
                            className="avatar"
                            alt=""
                        />
                        <p className="team">{match.team2.name}</p>
                    </div>
                    <div className="match-info">
                        <div className="time">
                            {moment(match.time).format("LLLL")}
                        </div>
                        <div className="area">{match.area}</div>
                    </div>
                </div>
                {isCaptain && (
                    <button
                        className="update-btn"
                        onClick={(e) =>
                            navigate("/update-match", {
                                state: match,
                            })
                        }
                    >
                        Cập nhật
                    </button>
                )}
                <div className="status-div">
                    Trạng thái: <span>{match.status}</span>
                </div>
            </div>
            {
                match.status === 'conflict'? 
                (openTimeline && <div className="timeline-div">Kết quả trận đấu mâu thuẫn, cần cập nhật lại</div>) :
                (openTimeline &&
                <div className="timeline-div">
                    <Timeline position="alternate">
                        {match.matchRecord.map((mr) => {
                            return (
                                <TimelineComponent
                                    key={mr._id}
                                    time={mr.minute}
                                    memberId={mr.memberId}
                                    isTeam1={mr.isTeam1}
                                />
                            );
                        })}
                    </Timeline>
                </div>)
            }
        </div>
    );
};

export default HistoryItem;
