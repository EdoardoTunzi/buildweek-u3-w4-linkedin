import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import MyNavBar from "./components/MyNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          {/* <Route path="/" element = {}/> */}
          <Route path="/profile" element={<ProfileCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
