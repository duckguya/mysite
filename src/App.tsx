import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Project from "./Routes/Project";
import Footer from "./Components/Footer";
import ProjectDetail from "./Components/ProjectDetail";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>I'm Sujin!</title>
      </Helmet>
      <Header />
      <Routes>
        <Route path="/mysite/about" element={<About />} />

        <Route path="/mysite/project" element={<Project />} />
        <Route path="/mysite/project/:id" element={<ProjectDetail />} />

        <Route path="/mysite" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
