import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyNavBar from "./components/MyNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import DetailsExperience from "./components/DetailsExperience";
import HomePage from "./components/HomePage";
import NavJobsPage from "./components/NavJobsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/details/experience" element={<DetailsExperience />} />
          <Route path="/jobs" element={<NavJobsPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
