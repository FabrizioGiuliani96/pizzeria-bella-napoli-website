const ChiSiamo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">La Nostra Storia</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            Dal 1985, Bella Napoli porta l&apos;autentica tradizione della pizza napoletana nel cuore della città. La nostra storia inizia con nonno Giuseppe, che portò con sé le antiche ricette di famiglia direttamente da Napoli.
          </p>
          <p className="text-lg mb-4">
            Ogni pizza che serviamo è il risultato di anni di esperienza, passione e dedizione alla vera arte della pizza napoletana. Il nostro impasto viene fatto lievitare per 24 ore e viene cotto nel tradizionale forno a legna.
          </p>
          <p className="text-lg">
            Oggi, la terza generazione della famiglia continua a portare avanti questa tradizione, unendo l&apos;autenticità della pizza napoletana con ingredienti di prima qualità.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800&auto=format&fit=crop" 
            alt="Il nostro forno a legna" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ChiSiamo;