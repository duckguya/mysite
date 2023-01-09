import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Project from "./Routes/Project";
import Resume from "./Routes/Resume";
import Footer from "./Components/Footer";
import ProjectDetail from "./Components/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/mysite/about" element={<About />} />

        <Route path="/mysite/project" element={<Project />} />
        <Route path="/mysite/project/:id" element={<ProjectDetail />} />

        <Route path="/mysite/resume" element={<Resume />} />

        <Route path="/mysite" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
