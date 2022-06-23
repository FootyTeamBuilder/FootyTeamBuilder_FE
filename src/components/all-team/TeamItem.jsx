import './TeamItem.css';

const TeamItem = ({name, level}) => {
    return (
        <div className="team-item">
            <img src={require('../../assets/pep.jpg')} className='team-avatar' alt="" />
            <div className='name'>{name}</div>
            <hr />
            <span className='level'>Trình độ: {level} </span>
            <hr />
            <p>Thành viên</p>
            {/* truyen vao danh sach cac thanh vien */}
        </div>
    )
}

export default TeamItem