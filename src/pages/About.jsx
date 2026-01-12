import React, { useState } from "react";
import { MoveRight, MoveLeft, Award, Users, Leaf, TrendingUp, Heart, Globe } from "lucide-react";

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const impactSlides = [
    {
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&q=80",
      title: "Biodiversité Préservée",
      description: "Nous protégeons et restaurons les écosystèmes naturels en plantant des espèces indigènes et en créant des corridors écologiques pour la faune locale.",
      stat: "10K+",
      statLabel: "Espèces protégées"
    },
    {
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      title: "Agriculture Durable",
      description: "Notre approche de l'agriculture régénérative enrichit les sols, réduit l'utilisation d'eau et crée des systèmes alimentaires résilients pour les communautés.",
      stat: "500+",
      statLabel: "Hectares cultivés"
    },
    {
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      title: "Impact Carbone Neutre",
      description: "Chaque projet compense son empreinte carbone à travers la reforestation et l'utilisation d'énergies renouvelables dans nos opérations.",
      stat: "85%",
      statLabel: "Réduction CO₂"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % impactSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + impactSlides.length) % impactSlides.length);
  };

  return (
    <section className="bg-gradient-to-b from-white to-green-50">
      {/* --- Section Founder --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
            <Users className="w-4 h-4" />
            <span>Notre Équipe</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Rencontrez Notre Fondateur
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* --- Card Founder --- */}
          <div className="relative group">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="relative h-96 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="John Doe"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">John Doe</h3>
                  <div className="flex items-center gap-2 text-green-300 font-medium mb-4">
                    <Leaf className="w-5 h-5" />
                    <span>Founder & Botanist</span>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex gap-6 mt-4">
                    <div>
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-sm text-gray-300">Years Exp.</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm text-gray-300">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">10K+</div>
                      <div className="text-sm text-gray-300">Plants</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-white">
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 bg-white border border-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    <Award className="w-4 h-4" />
                    Certified Botanist
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white border border-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    <Globe className="w-4 h-4" />
                    Eco Advocate
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white border border-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    <Heart className="w-4 h-4" />
                    Sustainability Expert
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* --- Description --- */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                Passionné par la botanique depuis son enfance, John Doe a consacré sa vie à 
                comprendre et protéger les écosystèmes naturels. Avec plus de 15 ans d'expérience 
                dans la recherche écologique, il a transformé sa passion en une mission concrète.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Notre objectif est de restaurer l'équilibre entre l'homme et la nature à travers 
                l'agriculture durable, la recherche scientifique et des projets communautaires 
                qui ont un impact réel et mesurable.
              </p>
            </div>

            {/* Mission Points */}
            <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Notre Vision</h3>
              
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Croissance Durable</h4>
                  <p className="text-sm text-gray-600">Développer des solutions qui respectent l'environnement</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Impact Communautaire</h4>
                  <p className="text-sm text-gray-600">Créer des opportunités pour les communautés locales</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Passion & Dévouement</h4>
                  <p className="text-sm text-gray-600">Chaque projet est guidé par notre engagement sincère</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Separator --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* --- Section Impact Environnemental --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Environnement{" "}
              <span className="relative inline-block text-green-600">
                Impact
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,4 Q25,0 50,4 T100,4" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Découvrez comment nos initiatives transforment positivement l'environnement
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="group bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Previous slide"
            >
              <MoveLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="group bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Next slide"
            >
              <MoveRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-3xl">
          <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <img
                  src={impactSlides[currentSlide].image}
                  alt={impactSlides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Stat Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="text-4xl font-bold text-green-600">
                    {impactSlides[currentSlide].stat}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {impactSlides[currentSlide].statLabel}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold w-fit">
                  <Leaf className="w-4 h-4" />
                  <span>Impact {currentSlide + 1}/{impactSlides.length}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {impactSlides[currentSlide].title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {impactSlides[currentSlide].description}
                </p>

                <button className="group flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-lg w-fit">
                  En savoir plus
                  <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {impactSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-green-600' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* --- Stats Banner --- */}
      <div className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">15+</div>
              <p className="text-green-200">Années d'expertise</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">50+</div>
              <p className="text-green-200">Projets réalisés</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">10K+</div>
              <p className="text-green-200">Plantes cultivées</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">100%</div>
              <p className="text-green-200">Engagement durable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;