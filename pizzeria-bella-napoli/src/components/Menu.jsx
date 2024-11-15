const Menu = () => {
  const pizze = [
    {
      categoria: "Pizze Classiche",
      items: [
        {
          nome: "Margherita",
          ingredienti: "Pomodoro San Marzano DOP, Mozzarella di Bufala DOP, Basilico, Olio EVO",
          prezzo: "9.00",
          immagine: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop"
        },
        {
          nome: "Marinara",
          ingredienti: "Pomodoro San Marzano DOP, Aglio, Origano, Olio EVO",
          prezzo: "7.00",
          immagine: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=800&auto=format&fit=crop"
        },
        {
          nome: "Napoli",
          ingredienti: "Pomodoro, Mozzarella, Acciughe, Origano, Olio EVO",
          prezzo: "10.00",
          immagine: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&auto=format&fit=crop"
        }
      ]
    },
    {
      categoria: "Pizze Speciali",
      items: [
        {
          nome: "Diavola",
          ingredienti: "Pomodoro, Mozzarella, Salame Piccante, Olio EVO",
          prezzo: "11.00",
          immagine: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop"
        },
        {
          nome: "4 Formaggi",
          ingredienti: "Mozzarella, Gorgonzola DOP, Parmigiano Reggiano, Provola, Olio EVO",
          prezzo: "12.00",
          immagine: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop"
        },
        {
          nome: "Capricciosa",
          ingredienti: "Pomodoro, Mozzarella, Prosciutto Cotto, Funghi, Olive, Carciofi",
          prezzo: "12.50",
          immagine: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop"
        }
      ]
    },
    {
      categoria: "Dolci Napoletani",
      items: [
        {
          nome: "Babà al Rum",
          ingredienti: "Babà artigianale, Rum invecchiato, Crema Chantilly",
          prezzo: "6.00",
          immagine: "https://www.cucchiaio.it/content/cucchiaio/it/ricette/2009/12/ricetta-baba-rum/jcr:content/header-par/image_single.img.jpg/1494316338319.jpg?im=Resize=(984)"
        },
        {
          nome: "Sfogliatella Riccia",
          ingredienti: "Pasta sfoglia, Ricotta, Canditi, Crema di Cannella",
          prezzo: "5.00",
          immagine: "https://cdn.cook.stbm.it/thumbnails/ricette/144/144711/hd750x421.jpg"
        },
        {
          nome: "Pastiera Napoletana",
          ingredienti: "Grano, Ricotta, Canditi, Acqua di Fiori d'Arancio",
          prezzo: "5.50",
          immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm3eDZKrMSF-tJUpW3bOYkqk3tomoKyV7RdQ&s"
        }
      ]
    },
    {
      categoria: "Bevande",
      items: [
        {
          nome: "Vino della Casa",
          ingredienti: "Rosso o Bianco - 75cl",
          prezzo: "14.00",
          immagine: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop"
        },
        {
          nome: "Birra Artigianale",
          ingredienti: "Chiara o Rossa - 50cl",
          prezzo: "6.00",
          immagine: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop"
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Il Nostro Menu</h1>
      
      {pizze.map((categoria, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-blue-700 border-b-2 border-blue-700 pb-2">
            {categoria.categoria}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.items.map((item, itemIndex) => (
              <div key={itemIndex} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.immagine} 
                    alt={item.nome}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{item.nome}</h3>
                    <span className="text-red-600 font-bold">€{item.prezzo}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.ingredienti}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-blue-900">Note</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Tutte le pizze sono preparate con farina 00 e lievitate 24 ore</li>
          <li>• Disponibile impasto senza glutine (+€2.00)</li>
          <li>• Extra ingredienti da €1.00 a €3.00</li>
          <li>• Coperto €2.00</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;