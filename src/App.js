import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </HashRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
