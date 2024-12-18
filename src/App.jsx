import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyNavBar from "./components/MyNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import DetailsExperience from "./components/DetailsExperience";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          {/* <Route path="/" element = {}/> */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/details/experience" element={<DetailsExperience />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
