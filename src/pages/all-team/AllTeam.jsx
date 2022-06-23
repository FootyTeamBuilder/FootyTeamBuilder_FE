import './AllTeam.css';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TeamItem from '../../components/all-team/TeamItem';

const AllTeam = () => {
    return (
        <div className="all-team">
            <div className="search-div">
                <div className='input-container'>
                    <input 
                        type='text'
                        placeholder='Nhập thông tin đội bóng'
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
                <TeamItem name='FC phui' level='Vui' />
                <TeamItem name='FC phui' level='Vui' />
                <TeamItem name='FC phui' level='Vui' />
                <TeamItem name='FC phui' level='Vui' />
                <TeamItem name='FC phui' level='Vui' />
                <TeamItem name='FC phui' level='Vui' />
                <TeamItem name='FC phui' level='Vui' />
                <TeamItem name='FC phui' level='Vui' />
            </div>
        </div>
    )
}

export default AllTeam