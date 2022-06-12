import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from "./components/footer/Footer.jsx";
import Header from './components/header/Header.jsx';
import Dashboard from "./pages/dashboard/Dashboard.jsx";

function App() {
  return (
      <div className="App"> 
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route exact path='/' />
          <Route path="*" element={<Footer />} />
        </Routes>
        <Routes>
          <Route path="/login" element={ <Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;
