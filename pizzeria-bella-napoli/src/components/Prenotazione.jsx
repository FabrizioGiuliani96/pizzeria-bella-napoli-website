const Prenotazione = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Prenota un Tavolo</h1>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Nome e Cognome</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Data</label>
          <input type="date" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Ora</label>
          <input type="time" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Numero di persone</label>
          <select className="w-full p-2 border rounded">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
          Prenota
        </button>
      </form>
    </div>
  );
};

export default Prenotazione;