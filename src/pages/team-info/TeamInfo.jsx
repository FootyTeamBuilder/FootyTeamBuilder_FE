import axios from 'axios';
import { useEffect } from 'react';
import {useState} from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/loading/Spinner';
import MemberItem from '../../components/member-item/MemberItem';
import './TeamInfo.css';
import '../../components/common/button/Button';
import Button from '../../components/common/button/Button';
import { requestJoinTeam } from '../../redux/apiRequest';
import { useSelector } from 'react-redux';

const TeamInfo = () => {

    const {teamId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [teamInfo, setTeamInfo] = useState();
    const [openMatching, setOpenMatching] = useState(false);
    const [openJoinTeam, setOpenJoinTeam] = useState(false);
    const user = useSelector((state) => state.auth.login?.currentUser);

    const getTeamInfo = async () => {
        const response = await axios.get(`/team/view-team/${teamId}`);
        setTeamInfo(response.data);
        setIsLoading(false);
    }

    useEffect(() => {
        getTeamInfo();
    }, []);

    if(isLoading) return <Spinner />;

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
                    <button className='join-team-btn' onClick={(e) => setOpenJoinTeam(true)}>Tham gia đội</button>
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
                            />
                        })
                    }
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
            {
                openJoinTeam &&
                <div className="join-team-confirm">
                    <div className="content">
                        <h2>Bạn có xác nhận yêu cầu tham gia đội không?</h2>
                        <div>
                            <button 
                                className='confirm'
                                onClick={(e) => {
                                    requestJoinTeam(teamId, user?.token);
                                    setOpenJoinTeam(false);
                                }}
                            >
                                Xác nhận
                            </button>
                            <button className='cancel' onClick={(e) => setOpenJoinTeam(false)}>Huỷ</button>
                        </div>
                    </div>
                    <div className="background" onClick={(e) => setOpenJoinTeam(false)}></div>
                </div>
            }
        </div>
    )
}

export default TeamInfo