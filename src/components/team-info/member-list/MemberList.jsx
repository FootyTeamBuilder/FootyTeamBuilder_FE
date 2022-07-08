import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import MemberItem from '../../member-item/MemberItem'

const MemberList = ({teamInfo}) => {
    const navigate = useNavigate();
    const { teamId } = useParams();
    return (
        <div className="members">
            <div className="members-grid">
                    <MemberItem 
                        avatar='blank-avatar.jpg'
                        name={teamInfo.captainUser.name}
                        role='Đội trưởng'
                        number=''
                        teamId={teamInfo.captain.teamId}
                        memberId={teamInfo.captain._id}
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
                    <IconButton aria-label='edit'>
                        <AddCircleIcon onClick={(e)=> navigate(`/create-member/${teamId}`)} />
                    </IconButton>
                </div>
            </div>
    
  )
}

export default MemberList