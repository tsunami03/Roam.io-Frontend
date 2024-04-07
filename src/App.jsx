import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import Profile from "./Pages/Profile";
import Destinations from "./Pages/Destinations";

function App() {
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
    </div>
  );
}

export default App;
