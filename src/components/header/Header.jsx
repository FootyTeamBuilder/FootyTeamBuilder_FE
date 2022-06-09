import './Header.css'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import { useState } from 'react'

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset <= 0 ? false : true);
    };

    return (
        <div className={isScrolled ? 'header is-scrolled' : 'header'}>
            <div className="header-child">
                <Link to='/'>
                    <img src={require('../../assets/goal.png')} style={{width: '3.5rem'}} alt='' />
                </Link>
                <span className="web-name">FootballTeam</span>
            </div>
            <div className="header-child right">
                <Link to='/'>Trang chủ</Link>
                <Link to='#'>Về chúng tôi</Link>
                <Link to='#'>Đội bóng</Link>
                <Link to='#'>Giải đấu</Link>
                <Link to='#'>Liên hệ</Link>
                <Button text='Đăng nhập' width='7rem' height='2.5rem' fontSize='1rem' />
            </div>
        </div>
    )
}

export default Header