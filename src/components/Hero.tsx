import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onScrollToPortfolio: () => void;
}

export default function Hero({ onScrollToPortfolio }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Nosy Hery <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Hasina</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 mb-8">
            <div className="flex items-center space-x-2 text-gray-300">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-lg md:text-xl font-medium">Dessinateur 3D Architectural</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2 text-gray-300">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-lg md:text-xl font-medium">Photographe</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Créateur d'espaces architecturaux en 3D et capteur d'instants photographiques, 
            je donne vie à vos projets avec passion et précision.
          </p>
          
          <button
            onClick={onScrollToPortfolio}
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold px-8 py-4 rounded-full hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <span className="text-lg">Découvrir mon travail</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-amber-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
}