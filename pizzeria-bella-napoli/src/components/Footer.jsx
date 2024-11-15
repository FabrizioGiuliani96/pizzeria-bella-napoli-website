const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-400">Bella Napoli</h3>
          <p>Via Roma, 123</p>
          <p>Milano, Italia</p>
          <p>Tel: +39 02 1234567</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-400">Orari</h3>
          <p>Lun-Ven: 12:00 - 15:00</p>
          <p>18:30 - 23:00</p>
          <p>Sab-Dom: 12:00 - 23:00</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-400">Seguici</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400">Facebook</a>
            <a href="#" className="hover:text-yellow-400">Instagram</a>
            <a href="#" className="hover:text-yellow-400">TripAdvisor</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;