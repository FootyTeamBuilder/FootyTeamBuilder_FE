import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UpdateInfor from "./pages/UpdateInfor/UpdateInfor";
import CreateTeam from "./pages/CreateTeam/CreateTeam"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' />
          <Route exact path="/register" />
          <Route path="*" element={<Header />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit-information" element={<UpdateInfor/>} />
          <Route path="/create" element={<CreateTeam />} />
        </Routes>
        <Routes>
          <Route exact path='/' />
          <Route exact path='/login' />
          <Route exact path='/register' />
          <Route path='*' element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
