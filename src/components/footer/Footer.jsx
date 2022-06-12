import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="upper">
                <div className="upper-left">
                    <div className="logo-div">
                        <Link to='/'>
                            <img src={require('../../assets/goal.png')} style={{width: '3.5rem'}} alt='' />
                        </Link>
                        <span className="web-name">FootballTeam</span>
                    </div>
                    <div className="nav-div">
                        <Link to='/'>Trang chủ</Link>
                        <Link to='#'>Về chúng tôi</Link>
                        <Link to='#'>Liên hệ</Link>
                    </div>
                </div>
                <div className="upper-right">
                    <div className="subscribe">Subscribe</div>
                    <div className="row">
                        <input type='text' placeholder='Nhập email của bạn' />
                        <button>Subscribe</button>
                    </div>
                    <div className="privacy">By subscribing you agree to with our Privacy Policy</div>
                </div>
            </div>
            <div className="lower">
                <div className="link-div">
                    <Link to='#'>Privacy Policy</Link>
                    <Link to='#'>Term of Service</Link>
                    <Link to='#'>Cookies Settings</Link>
                </div>
                <div className="copyright">
                    2022 FootballTeam. All right reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer