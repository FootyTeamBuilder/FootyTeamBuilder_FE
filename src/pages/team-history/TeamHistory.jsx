import './TeamHistory.css';
import { useNavigate } from 'react-router-dom';

const TeamHistory = () => {

    const navigate = useNavigate();

    return (
        <div className="team-history">
            <div className="matches"> {/* sua thanh map */}
                <div className="match-item">
                    <div className="left" style={{backgroundColor: '#5dd469'}}>
                        Thắng
                    </div>
                    <div className="middle">
                        <div className="score-middle">
                            <p className='team'>FC 1</p>
                            <img src={require('../../assets/blank-avatar.jpg')} className='avatar' alt="" />
                            <p className='score'>2</p>
                            <p>-</p>
                            <p className='score'>1</p>
                            <img src={require('../../assets/blank-avatar.jpg')} className='avatar' alt="" />
                            <p className='team'>FC 2</p>
                        </div>
                        <div className="match-info">
                            <div className="time">17:00</div>
                            <div className="area">Sân thông tin</div>
                        </div>
                    </div>
                    <button 
                        className='update-btn'
                        onClick={(e) => navigate('/update-match')}
                    >Cập nhật</button>
                </div>
                <div className="match-item">
                    <div className="left" style={{backgroundColor: '#e34f4f'}}>
                        Thua
                    </div>
                    <div className="middle">
                        <div className="score-middle">
                            <p className='team'>FC 1</p>
                            <img src={require('../../assets/blank-avatar.jpg')} className='avatar' alt="" />
                            <p className='score'>1</p>
                            <p>-</p>
                            <p className='score'>2</p>
                            <img src={require('../../assets/blank-avatar.jpg')} className='avatar' alt="" />
                            <p className='team'>FC 2</p>
                        </div>
                        <div className="match-info">
                            <div className="time">17:00</div>
                            <div className="area">Sân thông tin</div>
                        </div>
                    </div>
                </div>
                <div className="match-item">
                    <div className="left" style={{backgroundColor: 'gray'}}>
                        Hoà
                    </div>
                    <div className="middle">
                        <div className="score-middle">
                            <p className='team'>FC 1</p>
                            <img src={require('../../assets/blank-avatar.jpg')} className='avatar' alt="" />
                            <p className='score'>1</p>
                            <p>-</p>
                            <p className='score'>1</p>
                            <img src={require('../../assets/blank-avatar.jpg')} className='avatar' alt="" />
                            <p className='team'>FC 2</p>
                        </div>
                        <div className="match-info">
                            <div className="time">17:00</div>
                            <div className="area">Sân thông tin</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamHistory