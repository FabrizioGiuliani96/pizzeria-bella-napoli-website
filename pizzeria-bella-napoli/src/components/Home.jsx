import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="bg-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-16">
        <div 
          className="h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=2000&q=80')`
          }}
        >
          <div className="absolute inset-0">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-xl text-white">
                <h1 className="text-5xl font-bold mb-6">
                  La Vera Pizza Napoletana
                </h1>
                <p className="text-xl mb-8">
                  Dal 1985 portiamo la tradizione napoletana nel cuore della città
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full transition duration-300">
                  Ordina Ora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialità Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Le Nostre Specialità</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pizza Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Margherita DOP</h3>
                <p className="text-gray-600">Pomodoro San Marzano DOP, Mozzarella di Bufala DOP, Basilico</p>
                <p className="text-red-600 font-bold mt-4">€ 10</p>
              </div>
            </div>

            {/* Pizza Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=800&auto=format&fit=crop')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Marinara</h3>
                <p className="text-gray-600">Pomodoro San Marzano, Aglio, Origano, Olio EVO</p>
                <p className="text-red-600 font-bold mt-4">€ 8</p>
              </div>
            </div>

            {/* Pizza Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop')`
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Diavola</h3>
                <p className="text-gray-600">Pomodoro, Mozzarella, Salame Piccante, Olio EVO</p>
                <p className="text-red-600 font-bold mt-4">€ 12</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;