import React from 'react';
import './MemberItem.css';

const MemberItem = ({ avatar, name, role, nickname, number }) => {
    return (
        <div className="member-item">
            <span class="ribbon3" 
                style={role === 'Đội trưởng'? 
                    {'--ribbon-color': 'purple', '--inside-ribbon': '#440044'} : 
                    {'--ribbon-color': '#63A44C', '--inside-ribbon': 'green'}
                }
            >
                {role}
            </span>
            <img src={require(`../../assets/${avatar}`)} className='avatar' alt="" />
            <div className="name">{name}</div>
            <div className="nickname"><span>Biệt danh:</span> {nickname}</div>
            <div className="number"><span>Số áo:</span> {number}</div>
        </div>
    )
}

export default MemberItem