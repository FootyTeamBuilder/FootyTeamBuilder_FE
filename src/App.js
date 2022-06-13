import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
