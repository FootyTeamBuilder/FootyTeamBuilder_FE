import React from 'react';
import './MemberItem.css';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import { useNavigate } from 'react-router-dom';
import { deleteMemberInfo } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
const MemberItem = ({ avatar, name, role, nickname, number,teamId,memberId}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.login?.currentUser);
    
    const handleDeleteMember = (teamId, memberId) => {
        const choice = window.confirm("Are you sure you want to delete this member?")
        if(!choice) return;
        deleteMemberInfo(dispatch,navigate,teamId,memberId,user?.token);
        window.location.reload(false);
    };
    return (
        <div className="member-item">
            <span className="ribbon3" 
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
            <div className="button">
            <IconButton aria-label="preview">
                <PreviewIcon onClick={(e) => navigate(`/member-info/${memberId}`)}/>
            </IconButton>
            <IconButton aria-label="edit">
                <EditIcon onClick={(e)=> {navigate(`/edit-member/${teamId}/${memberId}`)
                window.scrollTo(0,0)
            }}/>
            </IconButton>
            <IconButton aria-label="delete">
                <DeleteIcon onClick={(e)=> handleDeleteMember(teamId, memberId)}/>
            </IconButton>
            </div>
        </div>
    );
}

export default MemberItem