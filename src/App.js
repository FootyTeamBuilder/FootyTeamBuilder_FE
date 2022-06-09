import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
