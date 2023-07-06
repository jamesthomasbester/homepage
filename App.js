import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import { Link } from "react-router-dom";
import Projects from "./pages/Projects.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      <link to="/projects" element={Projects}/>
    </div>
  );
}

export default App;
