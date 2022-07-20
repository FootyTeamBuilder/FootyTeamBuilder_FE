import "./allMyTeam.css";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TeamItem from "../../components/team-item/TeamItem";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Spinner from "../../components/loading/Spinner";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';

const AllMyTeam = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [teamList, setTeamList] = useState([]);
  const user = useSelector((state) => state.auth.login?.currentUser);
  const id = user?.id;

  const getTeamList = async (params, params2) => {
    const response = await axios.get(
      `/user/user-team-list/${params}/${params2}`
    );
    const team = response.data;
    setTeamList(team.teams);
    setIsLoading(false);
  };

  useEffect(() => {
    getTeamList(id, "true");
  }, []);

  console.log(teamList.length);
  if (isLoading) return <Spinner />;

  return teamList.length === 0 ? (
    <div className="empty-page">
      <h1>You need to create your team</h1>
      <img src="static/images/anh3.jpg"></img>
      <Button variant="contained" sx={{padding: '10px'}} onClick={(e)=> navigate('/create')}>Tao Doi Bong</Button>
    </div>
  ) : (
    <div className="all-team">
      <div className="search-div">
        <div className="input-container">
          <input
            type="text"
            placeholder="Tìm theo tên đội bóng"
            onChange={(e) => getTeamList(e.target.value)}
          ></input>
          <SearchIcon />
        </div>
        <div className="dropdown-container">
          <FormControl>
            <InputLabel>Trình độ</InputLabel>
            <Select label="Trình độ">
              <MenuItem value="Mạnh">Mạnh</MenuItem>
              <MenuItem value="Trung bình">Trung bình</MenuItem>
              <MenuItem value="Yếu">Yếu</MenuItem>
              <MenuItem value="Vui">Vui</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Địa điểm</InputLabel>
            <Select label="Địa điểm">
              <MenuItem value="Hà Nội">Hà Nội</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Giới tính</InputLabel>
            <Select label="Giới tính">
              <MenuItem value="Nam">Nam</MenuItem>
              <MenuItem value="Nữ">Nữ</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="teams-div">
        {teamList.map((t) => {
          return (
            <TeamItem
              key={t.team.name}
              name={t.team.name}
              level={t.team.level}
              avatar="blank-avatar.jpg"
              onClick={(e) => {
                navigate(`/edit-team/${t.team._id}`);
                window.scrollTo(0, 0);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllMyTeam;
