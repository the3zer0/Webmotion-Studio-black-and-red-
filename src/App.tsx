import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { VideoEditingPage } from "./pages/VideoEditingPage";
import { GraphicsDesignPage } from "./pages/GraphicsDesignPage";
import { WebDevelopmentPage } from "./pages/WebDevelopmentPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/video-editing" element={<VideoEditingPage />} />
      <Route path="/graphics-design" element={<GraphicsDesignPage />} />
      <Route path="/web-development" element={<WebDevelopmentPage />} />
    </Routes>
  );
}