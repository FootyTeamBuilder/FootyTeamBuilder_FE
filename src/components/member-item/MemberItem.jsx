import React from 'react';
import './MemberItem.css';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import { useNavigate } from 'react-router-dom';
const MemberItem = ({ avatar, name, role, nickname, number,onClick,teamId,memberId}) => {
    const navigate = useNavigate();
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
            <div>
            <IconButton aria-label="preview">
                <PreviewIcon onClick={(e) => navigate(`/member-info/${memberId}`)}/>
            </IconButton>
            <IconButton aria-label="edit">
                <EditIcon onClick={(e)=> navigate(`/edit-member/${teamId}/${memberId}`)}/>
            </IconButton>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            </div>
        </div>
    );
}

export default MemberItem