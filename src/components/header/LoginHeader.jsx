import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../common/button/Button'
import { useState } from 'react'
import goalImg from '../../assets/goal.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';

const LoginHeader = () => {

    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpenProfileDropdown, setIsOpenProfileDropdown] = useState(false);
    const [isOpenNoti, setIsOpenNoti] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset <= 0 ? false : true);
    };

    return (
        <div className={isScrolled ? 'header is-scrolled' : 'header'}>
            <div className="header-child">
                <Link to='/'>
                    <img src={goalImg} style={{width: '3.5rem'}} alt='' />
                </Link>
                <span className="web-name">FootballTeam</span>
            </div>
            <div className="header-child right">
                <Link to='/'>Trang chủ</Link>
                <Link to='#'>Về chúng tôi</Link>
                <Link to='#'>Đội bóng</Link>
                <Link to='#'>Giải đấu</Link>
                <Link to='#'>Liên hệ</Link>
                <div style={{position: 'relative'}}>
                    <NotificationsNoneIcon sx={{color: '#63A44C', fontSize: '2rem', cursor: 'pointer'}} 
                        onClick={
                            (e) => {
                                setIsOpenNoti(!isOpenNoti);
                                setIsOpenProfileDropdown(false);
                            }
                        } 
                    />
                    <div className={isOpenNoti? 'noti is-opened' : 'noti'}>

                        {/* se sua thanh map */}
                        <div className="noti-item">
                            <img src={require('../../assets/pep.jpg').default} alt="" />
                            <div>
                                <p>Content</p>
                                <span>1 Ngày trước</span>
                            </div>
                        </div>
                        <div className="noti-item">
                            <img src={require('../../assets/pep.jpg').default} alt="" />
                            <div>
                                <p>Content</p>
                                <span>1 Ngày trước</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div style={{position: 'relative'}}>
                    <img 
                        src={require('../../assets/blank-avatar.jpg').default} 
                        alt='' 
                        className='avatar'
                        onClick={(e) => {
                            setIsOpenProfileDropdown(!isOpenProfileDropdown);
                            setIsOpenNoti(false);
                        }}
                    />
                    <div className={isOpenProfileDropdown? 'dropdown-profile is-opened' : 'dropdown-profile'}>
                        <Link to='#'>
                            <AccountBoxIcon /> Hồ sơ của tôi
                        </Link>
                        <Link to='#'>
                            <GroupIcon /> Hồ sơ đội bóng
                        </Link>
                        <Link to='#'>
                            <LogoutIcon /> Đăng xuất
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginHeader;