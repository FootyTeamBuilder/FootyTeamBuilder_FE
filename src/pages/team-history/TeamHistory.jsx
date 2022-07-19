import "./TeamHistory.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Spinner from "../../components/loading/Spinner";
import Timeline from "@mui/lab/Timeline";
import TimelineComponent from "../../components/update-match/timeline-item/TimelineComponent";
import HistoryItem from "../../components/team-history/history-item/HistoryItem";

const TeamHistory = () => {
    const navigate = useNavigate();
    const { teamId } = useParams();
    const [matchHistoryList, setMatchHistoryList] = useState();
    const [isCaptain, setIsCaptain] = useState();
    const [openHelp, setOpenHelp] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const user = useSelector((state) => state.auth.login?.currentUser);

    const getMatchHistory = async () => {
        const response = await axios.get(`/match/match-history/${teamId}`, {
            headers: { Authorization: `Bearer ${user?.token}` },
        });
        setMatchHistoryList(response.data.data);
        setIsLoading(false);
    };

    //kiem tra user la doi truong cua team dang xem hay khong
    const checkUser = async (teamId) => {
        const response = await axios.get(`/team/is-captain/${teamId}`, {
            headers: { Authorization: `Bearer ${user?.token}` },
        });
        setIsCaptain(response.data.isCaptain);
    };

    useEffect(() => {
        getMatchHistory();
        checkUser(teamId);
    }, []);

    if (isLoading) return <Spinner />;

    return (
        <div className="team-history">
            <div className="matches">
                {matchHistoryList?.map((m) => {
                    return (
                        <HistoryItem key={m._id} match={m} isCaptain={isCaptain} />
                    );
                })}
            </div>
            <div className="help-btn" onClick={(e) => setOpenHelp(!openHelp)}>
                <ContactSupportIcon />
            </div>
            {openHelp && (
                <p className="help-div">
                    Chú thích các trạng thái trận đấu: <br />
                    - Conflict: Tỉ số trận đấu cập nhật bởi 2 đội đang mâu
                    thuẫn. <br />- Confirm: Tỉ số trận đấu cập nhật bởi 2 đội đã
                    trùng nhau. <br />
                    - Pending: Tỉ số trận đấu đang được cập nhật. <br />
                    - None: Chưa cập nhật tỉ số. <br />
                </p>
            )}
        </div>
    );
};

export default TeamHistory;
