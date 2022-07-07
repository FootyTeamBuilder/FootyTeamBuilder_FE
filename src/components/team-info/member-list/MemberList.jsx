import React from 'react'
import MemberItem from '../../member-item/MemberItem'

const MemberList = ({teamInfo}) => {
    console.log(teamInfo);
    return (
        <div className="members">
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
    
  )
}

export default MemberList