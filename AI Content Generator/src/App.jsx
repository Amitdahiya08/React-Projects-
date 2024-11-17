import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SocialMedia from "./pages/SocialMedia"
import Email from "./pages/Email"
import Blog from "./pages/Blog"
import VideoScript from "./pages/VideoScript"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social-media-generator" element={ <SocialMedia/>} />
        <Route path="/video-script-generator" element={<VideoScript/>} />
        <Route path="/blog-generator" element={<Blog/>} />
        <Route path="/email-generator" element={<Email/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
