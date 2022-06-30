import axios from 'axios';
import { useEffect } from 'react';
import {useState} from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/loading/Spinner';
import './TeamInfo.css';

const TeamInfo = () => {

    const {teamId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [teamInfo, setTeamInfo] = useState();

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
                <img src={require('../../assets/blank-avatar.jpg')} alt="" className='avatar' />
                <div className="right">
                    <h1>{teamInfo.team.name}</h1>
                    <div className="grid">
                        {teamInfo.team.level}
                    </div>
                </div>
            </div>
            <div className="members">

            </div>
        </div>
    )
}

export default TeamInfo