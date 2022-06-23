import './Header.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Button from '../common/button/Button'
import { useState } from 'react'
import goalImg from '../../assets/goal.png';

const Header = () => {

    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

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
                <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Trang chủ</NavLink>
                <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Về chúng tôi</NavLink>
                <NavLink to='/all-team' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Đội bóng</NavLink>
                <NavLink to='/league' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Giải đấu</NavLink>
                <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Liên hệ</NavLink>
                <Button text='Đăng nhập' width='7rem' height='2.5rem' fontSize='1rem' action={(e) => navigate('/login')} />
            </div>
        </div>
    )
}

export default Header