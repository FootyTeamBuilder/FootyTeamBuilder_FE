import './AllTeam.css';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TeamItem from '../../components/team-item/TeamItem';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Spinner from '../../components/loading/Spinner';
import { MessageOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AllTeam = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [teamList, setTeamList] = useState([]);

    const getTeamList = async (params) => {
        const response = await axios.get(`/team/list/${params}`);
        setTeamList(response.data.data);
        setIsLoading(false);
    }

    useEffect(() => {
        getTeamList('');
    },[]);

    console.log(teamList);
    if(isLoading) return <Spinner />;

    return (
        <div className="all-team">
            <div className="search-div">
                <div className='input-container'>
                    <input 
                        type='text'
                        placeholder='Tìm theo tên đội bóng'
                        onChange={(e) => getTeamList(e.target.value)}
                    ></input>
                    <SearchIcon />
                </div>
                <div className="dropdown-container">
                    <FormControl>
                        <InputLabel>Trình độ</InputLabel>
                        <Select
                            label="Trình độ"
                        >
                            <MenuItem value='Mạnh'>Mạnh</MenuItem>
                            <MenuItem value='Trung bình'>Trung bình</MenuItem>
                            <MenuItem value='Yếu'>Yếu</MenuItem>
                            <MenuItem value='Vui'>Vui</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl >
                        <InputLabel>Địa điểm</InputLabel>
                        <Select
                            label="Địa điểm"
                        >
                            <MenuItem value='Hà Nội'>Hà Nội</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl >
                        <InputLabel>Giới tính</InputLabel>
                        <Select
                            label="Giới tính"
                        >
                            <MenuItem value='Nam'>Nam</MenuItem>
                            <MenuItem value='Nữ'>Nữ</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="teams-div">
                {
                    teamList.map((t) => {
                        return <TeamItem 
                                    key={t.name}
                                    name={t.name} 
                                    level={t.level} 
                                    avatar='blank-avatar.jpg' 
                                    onClick={(e) => navigate(`/team-info/${t._id}`)}
                                />
                    })
                }
            </div>
        </div>
    )
}

export default AllTeam