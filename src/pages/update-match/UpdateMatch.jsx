import './UpdateMatch.css';

const UpdateMatch = () => {
    return (
        <div className="update-match">
            <img src={require('../../assets/blank-avatar.jpg')} alt=''  />
            <input type='number'></input>
            <div className="info">
                <div className="time">17 : 00</div>
                <div className="location">Sân thông tin</div>
            </div>
            <input type='number'></input>
            <img src={require('../../assets/blank-avatar.jpg')} alt='' />
            <button className='confirm'>Xác nhận kết quả</button>
            <div className="status">Trạng thái: <span>conflict</span> </div>
        </div>
    )
}

export default UpdateMatch