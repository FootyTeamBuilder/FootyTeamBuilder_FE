import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoginHeader from "./components/header/LoginHeader";
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllTeam from "./pages/all-team/AllTeam";
import UpdateMatch from "./pages/update-match/UpdateMatch";
import UpdateInfor from "./pages/UpdateInfor/UpdateInfor";
import CreateTeam from "./pages/CreateTeam/CreateTeam"
import EditTeam from "./pages/EditTeam/EditTeam";
import TeamInfo from "./pages/team-info/TeamInfo";

function App() {

  const {login} = useSelector((state) => state.auth);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' />
          <Route exact path="/register" />
          <Route path="*" element={login.currentUser? <LoginHeader /> : <Header />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/all-team" element={<AllTeam />} />
          <Route path="/team-info/:teamId" element={<TeamInfo />} />
          <Route path="/update-match" element={<UpdateMatch />} />
          <Route path="/edit-information" element={<UpdateInfor/>} />
          <Route path="/create" element={<CreateTeam />} />
          <Route path="/edit-team" element={<EditTeam />} />
        </Routes>
        <Routes>
          <Route exact path='/' />
          <Route exact path='/login' />
          <Route exact path='/register' />
          <Route path='*' element={<Footer />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default App;
