import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import ReservationForm from '../components/ReservationForm';
import ReviewSystem from '../components/ReviewSystem';
// ... altri import

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/prenota" element={<ReservationForm />} />
      <Route path="/recensioni" element={<ReviewSystem />} />
      {/* ... altre rotte */}
    </Routes>
  );
}