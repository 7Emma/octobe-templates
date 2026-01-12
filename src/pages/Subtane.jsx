import React from "react";
import { MoveRight, Target, Recycle, Globe, ArrowRight } from "lucide-react";

function Subtane() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50">
      {/* --- Section principale --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* --- Texte à gauche --- */}
          <div className="flex-1 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              <Target className="w-4 h-4" />
              <span>Notre Mission</span>
            </div>

            {/* Titre principal */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Sustainability is{" "}
              <span className="relative inline-block text-green-600">
                more than a goal
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,4 Q25,0 50,4 T100,4" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
              <br />
              <span className="text-gray-900">— It's our mission.</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Nous nous engageons à créer un impact positif sur l'environnement à travers 
              des pratiques durables et innovantes. Chaque action compte pour construire 
              un avenir plus vert et responsable.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <Recycle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">100% Recyclable</h3>
                  <p className="text-sm text-gray-600">Matériaux éco-responsables</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <Globe className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Carbon Neutral</h3>
                  <p className="text-sm text-gray-600">Empreinte carbone zéro</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Learn More
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 text-lg font-semibold px-8 py-4 rounded-full border-2 border-gray-200 hover:border-green-600 transition-all duration-300">
                Our Impact
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* --- Image à droite --- */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
                  alt="Sustainable environment"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="bg-green-600 text-white p-4 rounded-xl">
                    <div className="text-3xl font-bold">85%</div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Réduction CO₂</p>
                    <p className="text-xs text-gray-500">Depuis 2020</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">Certified Green</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Section citation avec image de fond --- */}
      <div className="relative mt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="relative h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1600&q=80"
            alt="Sustainability background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-green-900/90"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center space-y-8">
            {/* Quote Icon */}
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>
            </div>

            {/* Quote Text */}
            <blockquote className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed">
              "Notre planète n'est pas un héritage de nos ancêtres, 
              mais un prêt de nos enfants. Agissons aujourd'hui pour leur futur."
            </blockquote>

            {/* Author */}
            <div className="pt-4">
              <p className="text-green-200 text-lg font-medium">— Équipe Otobe</p>
              <p className="text-green-300/80 text-sm mt-1">Engagement Environnemental 2025</p>
            </div>

            {/* Call to Action */}
            <div className="pt-8">
              <button className="group inline-flex items-center gap-2 bg-white text-green-900 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Rejoignez le mouvement
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Section Stats --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-green-600">10K+</div>
            <p className="text-gray-600 text-sm md:text-base">Arbres plantés</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-green-600">85%</div>
            <p className="text-gray-600 text-sm md:text-base">CO₂ réduit</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-green-600">100%</div>
            <p className="text-gray-600 text-sm md:text-base">Énergie verte</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-green-600">50+</div>
            <p className="text-gray-600 text-sm md:text-base">Projets actifs</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subtane;