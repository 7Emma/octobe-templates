import React from "react";
import { MoveRight, Leaf, Award, Shield } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* --- Left Content --- */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <Leaf className="w-4 h-4" />
              <span>Certified Eco-Friendly</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-green-600 relative inline-block">
                Restoring Balance
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,4 Q25,0 50,4 T100,4"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
              <br />
              <span className="text-gray-900">Empowering</span>{" "}
              <span className="text-gray-700">change.</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Transformez votre environnement avec des solutions durables et
              innovantes. Nous vous accompagnons dans votre démarche écologique
              pour un futur plus vert et responsable.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Get Started
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 text-lg font-semibold px-8 py-4 rounded-full border-2 border-gray-200 hover:border-green-600 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
              <span className="inline-flex items-center gap-2 bg-white border border-green-200 text-green-800 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <Leaf className="w-4 h-4" />
                Quality Plants
              </span>
              <span className="inline-flex items-center gap-2 bg-white border border-green-200 text-green-800 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <Shield className="w-4 h-4" />
                Eco Friendly
              </span>
              <span className="inline-flex items-center gap-2 bg-white border border-green-200 text-green-800 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <Award className="w-4 h-4" />
                Sustainable Growth
              </span>
            </div>
          </div>

          {/* --- Right Content (Image + Card) --- */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80"
                  alt="Nature illustration"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs transform hover:-translate-y-2 transition-transform duration-300 hidden lg:block">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Quality Plants
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Découvrez notre sélection premium de plantes cultivées
                      avec soin et expertise.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-4 hidden md:block">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              1000+
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Plants Species
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              500+
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Happy Customers
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              15+
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              98%
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Satisfaction Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
