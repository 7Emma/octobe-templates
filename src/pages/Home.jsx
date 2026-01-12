import React from "react";
import { MoveRight, Leaf, Mountain, Sparkles } from "lucide-react";

function Home() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-800 to-green-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Découvrez la beauté de la nature</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Where nature thrives,
              <br />
              and adventure awaits
            </h1>
            <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
              Explorez des paysages luxuriants et reconnectez-vous avec
              l'essence même de la nature sauvage
            </p>
            <button className="bg-white text-green-800 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Commencer l'aventure
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Nos Destinations Naturelles
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Des expériences authentiques au cœur d'environnements préservés
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Large Card */}
          <div className="lg:col-span-5 group">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-80">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
                  alt="Forêt luxuriante"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                    <Leaf className="w-4 h-4" />
                    <span>Écosystème préservé</span>
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Lush Greenery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Plongez au cœur d'une végétation dense et verdoyante où chaque
                  sentier révèle une nouvelle merveille naturelle. Une
                  expérience immersive unique.
                </p>
                <button className="flex items-center gap-2 text-green-700 font-semibold hover:gap-4 transition-all duration-300 group">
                  Explorer la destination
                  <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Featured Card */}
            <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  <Mountain className="w-4 h-4" />
                  <span>Aventure Premium</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  Embrace the wild side
                </h3>
                <p className="text-green-100 text-lg">
                  Venture beyond limits and reconnect with nature. Découvrez des
                  panoramas à couper le souffle et vivez des moments
                  inoubliables.
                </p>
                <button className="bg-white text-green-900 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 inline-flex items-center gap-2 mt-4">
                  En savoir plus
                  <MoveRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom Two Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="relative overflow-hidden h-56">
                  <img
                    src="https://images.unsplash.com/photo-1587976931134-8a6c5f0b9fe6?w=800&q=80"
                    alt="Ananas tropical"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Tropical Delight
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Savourez l'exotisme des tropiques avec une biodiversité
                    exceptionnelle et des saveurs authentiques.
                  </p>
                  <button className="flex items-center gap-2 text-green-700 font-semibold hover:gap-4 transition-all duration-300">
                    Découvrir
                    <MoveRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="relative overflow-hidden h-56">
                  <img
                    src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80"
                    alt="Jardin zen"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Serenity Garden
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Un havre de paix où la tranquillité règne. Ressourcez-vous
                    dans un cadre naturel apaisant et harmonieux.
                  </p>
                  <button className="flex items-center gap-2 text-green-700 font-semibold hover:gap-4 transition-all duration-300">
                    En savoir plus
                    <MoveRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Prêt à vivre l'aventure ?
          </h2>
          <p className="text-green-100 text-lg">
            Rejoignez des milliers d'explorateurs qui ont déjà découvert la
            magie de nos destinations naturelles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="bg-white text-green-900 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg">
              Réserver maintenant
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Voir toutes les destinations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
