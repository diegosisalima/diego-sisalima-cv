import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages/Index.jsx";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
