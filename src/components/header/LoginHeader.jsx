import './Header.css'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import goalImg from '../../assets/goal.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/apiRequest';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useSelector } from 'react-redux';
import axios from 'axios';

const LoginHeader = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpenProfileDropdown, setIsOpenProfileDropdown] = useState(false);
    const [isOpenNoti, setIsOpenNoti] = useState(false);
    const [notiList, setNotiList] = useState([]);
    const user = useSelector((state) => state.auth.login?.currentUser);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset <= 0 ? false : true);
    };

    const getNotiList = async (token) => {
        const res = await axios.get('/user/notification-list', {
            headers: { Authorization: `Bearer ${token}` }
        });
        setNotiList(res.data.data);
    }

    // lay cac thong bao khi load header
    useEffect(() => {
        getNotiList(user?.token);
    }, []);

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
                <NavLink to='/all-team' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Đội bóng</NavLink>
                <NavLink to='/league' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Giải đấu</NavLink>
                <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Liên hệ</NavLink>
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

                        {
                            notiList.length === 0 ? <div className='noti-item'>Bạn không có thông báo</div> :
                            notiList.map(n => {
                                return <div className="noti-item" key={n._id}>
                                    <img src={require('../../assets/pep.jpg')} alt="" />
                                    <div>
                                        <p>{n.content}</p>
                                        <span>{n.createdAt}</span>
                                        <button className='accept'>Chấp nhận</button>
                                        <button className='reject'>Từ chối</button>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
                <div style={{position: 'relative'}}>
                    <img 
                        src={require('../../assets/blank-avatar.jpg')} 
                        alt='' 
                        className='avatar'
                        onClick={(e) => {
                            setIsOpenProfileDropdown(!isOpenProfileDropdown);
                            setIsOpenNoti(false);
                        }}
                    />
                    <div className={isOpenProfileDropdown? 'dropdown-profile is-opened' : 'dropdown-profile'}>
                        <Link to='edit-information'>
                            <AccountBoxIcon /> Hồ sơ của tôi
                        </Link>
                        <Link to='edit-team'>
                            <GroupIcon /> Hồ sơ đội bóng
                        </Link>
                        <Link to='/update-match'>
                            <SportsSoccerIcon /> Trận đấu của tôi
                        </Link>
                        <Link to='/team-history'>
                            <LibraryBooksIcon /> Lịch sử đấu
                        </Link>
                        <Link to='/login' onClick={(e) => logOut(dispatch,navigate)}>
                            <LogoutIcon /> Đăng xuất
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginHeader;