import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Project from "./Routes/Project";
import Resume from "./Routes/Resume";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />

        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<Project />} />

        <Route path="/resume" element={<Resume />} />

        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
