import axios from 'axios';
import { useEffect } from 'react';
import {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../../components/loading/Spinner';
import MemberItem from '../../components/member-item/MemberItem';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import './TeamInfo.css';
import { createMember } from '../../redux/apiRequest';

const TeamInfo = () => {
    const navigate = useNavigate();
    const {teamId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [teamInfo, setTeamInfo] = useState();

    const handleCreateNewMember = (member) => {
        createMember()
    };
    const getTeamInfo = async () => {
        const response = await axios.get(`/team/view-team/${teamId}`);
        setTeamInfo(response.data);
        setIsLoading(false);
    }

    useEffect(() => {
        getTeamInfo();
    }, []);

    if(isLoading) return <Spinner />;

    console.log(teamInfo);

    return (
        <div className="team-info">
            <div className="team-info-detail">
                <img src={require('../../assets/blank-avatar.jpg')} alt="" className='avatar' /> {/* thay bang logo */}
                <div className="right">
                    <h1>{teamInfo.team.name}</h1>
                    <div className="info-detail">
                        <div className='grid-item'><span>Giới thiệu:</span> {teamInfo.team.description}</div>
                        <div className="grid-item"><span>Trình độ:</span> {teamInfo.team.level}</div>
                        <div className="grid-item"><span>Độ tuổi:</span> {teamInfo.team.age.minAge} - {teamInfo.team.age.maxAge}</div>
                        <div className="grid-item"><span>Áo đấu:</span> {teamInfo.team.kits}</div>
                        <div className="grid-item"><span>Khu vực:</span> {teamInfo.team.area}</div>
                        <div className="grid-item"><span>Thời gian chơi bóng:</span> {teamInfo.team.time}</div>
                    </div>
                </div>
            </div>
            <div className="members">
                <h1>Danh sách thành viên</h1>
                <div className="members-grid">
                    <MemberItem 
                        avatar='blank-avatar.jpg'
                        name={teamInfo.captain.name}
                        role='Đội trưởng'
                        number=''
                    />
                   
                    {
                        teamInfo.members.map(t => {
                            return <MemberItem
                                key={t.member._id}
                                avatar='blank-avatar.jpg'
                                name={t.info?.name}
                                role={t.member.role}
                                nickname={t.member.nickname}
                                number={t.member.number}
                                onClick={(e) => navigate(`/member-info/${t.member._id}`)}
                            />
                        })
                    }
                     <IconButton aria-label="edit">
                      <AddCircleIcon onClick={(e) => handleCreateNewMember} />
                     </IconButton>
                </div>
            </div>
        </div>
    )
}

export default TeamInfo