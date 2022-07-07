import './MemberItem.css';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
const MemberItem = ({ avatar, name, role, nickname, number,onClick}) => {
    return (
        <div className="member-item" onClick={onClick}>
            <span className="ribbon3">{role}</span>
            <img src={require(`../../assets/${avatar}`)} className='avatar' alt="" />
            <div className="name">{name}</div>
            <div className="nickname"><span>Biệt danh:</span> {nickname}</div>
            <div className="number"><span>Số áo:</span> {number}</div>
            <div>
            <IconButton aria-label="preview">
                <PreviewIcon />
            </IconButton>
            <IconButton aria-label="edit">
                <EditIcon />
            </IconButton>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            </div>
        </div>
    )
}

export default MemberItem