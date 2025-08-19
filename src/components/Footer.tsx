import React from 'react';
import { Heart, Camera, Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Nosy Hery <span className="text-amber-400">Hasina</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Dessinateur 3D Architectural & Photographe
            </p>
            
            <div className="flex justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <Building2 className="w-5 h-5 text-amber-400" />
                <span>Architecture 3D</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Camera className="w-5 h-5 text-amber-400" />
                <span>Photographie</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Nosy Hery Hasina. Tous droits réservés.
              </p>
              
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Créé avec</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>à Madagascar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}