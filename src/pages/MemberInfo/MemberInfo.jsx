import axios from 'axios';
import { useEffect } from 'react';
import {useState} from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/loading/Spinner';
// import MemberItem from '../../components/member-item/MemberItem';
import './memberInfo.css';

const MemberInfo = () => {

    const {memberId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [memberInfo, setMemberInfo] = useState();

    const getMemberInfo = async () => {
        const response = await axios.get(`/team/view-member/${memberId}`);
        setMemberInfo(response.data);
        setIsLoading(false);
    }

    useEffect(() => {
          getMemberInfo();
    }, []);

    if(isLoading) return <Spinner />;


    return (
        <div className="member-info">
            <div className="member-info-detail">
                <img src={require('../../assets/blank-avatar.jpg')} alt="" className='avatar' /> {/* thay bang logo */}
                <div className="right">
                    <h1>{memberInfo.member.nickname}</h1>
                    <div className="info-detail">
                        <div className='grid-item'><span>Nickname:</span> {memberInfo.member.nickname}</div>
                        <div className="grid-item"><span>Role:</span> {memberInfo.member.role}</div>
                        <div className="grid-item"><span>Number:</span>{memberInfo.member.number}</div>
                        <div className="grid-item"><span>Áo đấu:</span> {'teamInfo.team.kits'}</div>
                        <div className="grid-item"><span>Khu vực:</span> {'teamInfo.team.area'}</div>
                        <div className="grid-item"><span>Thời gian chơi bóng:</span> {'teamInfo.team.time'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberInfo