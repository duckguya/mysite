import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Project from "./Routes/Project";
import Footer from "./Components/Footer";
import ProjectDetail from "./Components/ProjectDetail";
import { Helmet } from "react-helmet-async";
import Random from "./Components/Random";

function App() {
  return (
    <HashRouter>
      <Helmet>
        <title>I'm Sujin!</title>
      </Helmet>
      <Header />
      <Routes>
        <Route path="/mysite/about" element={<About />} />

        <Route path="/mysite/project" element={<Project />} />
        <Route path="/mysite/project/:id" element={<ProjectDetail />} />

        <Route path="/mysite" element={<Home />} />

        <Route path="/mysite/random" element={<Random />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
