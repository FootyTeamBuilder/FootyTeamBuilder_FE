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
import '../../components/common/button/Button';
import Button from '../../components/common/button/Button';

const TeamInfo = () => {
    const navigate = useNavigate();
    const {teamId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [teamInfo, setTeamInfo] = useState();
    const [openMatching, setOpenMatching] = useState(false);

  
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
                    <button className='matching-btn' onClick={(e) => setOpenMatching(true)}>Bắt đối</button>
                </div>
            </div>
            <div className="members">
                <h1>Danh sách thành viên</h1>
                <div className="members-grid">
                    <MemberItem 
                        avatar='blank-avatar.jpg'
                        name={teamInfo.captainUser.name}
                        role='Đội trưởng'
                        number=''
                        onClick={(e) => navigate(`/member-info/${teamInfo.captain._id}`)}
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
                                teamId={t.member.teamId}
                                memberId={t.member._id}
                                
                            />
                        })
                    }
                     <IconButton aria-label="edit">
                      <AddCircleIcon onClick={(e) => navigate(`/create-member/${teamId}`)} />
                     </IconButton>
                </div>
            </div>
            {
                openMatching &&
                <div className='matching-form'>
                    <div className="content">
                        <button className='close' onClick={(e) => setOpenMatching(false)}>X</button>
                        <div className='title'>Thư mời</div>
                        <textarea placeholder='Lời mời' className='invite' rows='5' />
                        <input type="text" placeholder='Địa điểm trận đấu' />
                        <input type="datetime-local" />
                        <button className='submit'>Gửi</button>
                    </div>
                    <div className="background" onClick={(e) => setOpenMatching(false)}></div>
                </div>
            }
        </div>
    )
}

export default TeamInfo