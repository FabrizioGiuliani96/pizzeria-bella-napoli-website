import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ChiSiamo from './components/ChiSiamo';
import Prenotazione from './components/Prenotazione';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-stone-100">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/prenotazione" element={<Prenotazione />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
