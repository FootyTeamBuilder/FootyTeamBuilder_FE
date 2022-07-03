import './MemberItem.css';

const MemberItem = ({ avatar, name, role, nickname, number }) => {
    return (
        <div className="member-item">
            <span class="ribbon3">{role}</span>
            <img src={require(`../../assets/${avatar}`)} className='avatar' alt="" />
            <div className="name">{name}</div>
            <div className="nickname"><span>Biệt danh:</span> {nickname}</div>
            <div className="number"><span>Số áo:</span> {number}</div>
        </div>
    )
}

export default MemberItem