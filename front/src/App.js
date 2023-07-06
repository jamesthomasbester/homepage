import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />} />
      </Routes>
       <Footer />
    </div>
  );
}

export default App;
