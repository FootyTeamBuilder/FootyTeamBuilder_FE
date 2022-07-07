import './TeamHistory.css';
import SearchIcon from '@mui/icons-material/Search';

const TeamHistory = () => {
    return (
        <div className="team-history">
            <div className="search">
                <h1>Lịch sử đấu đội của bạn</h1>
                <div className="input-container">
                    <input type="text" placeholder='Tìm kiếm' />
                    <SearchIcon />
                </div>
            </div>
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