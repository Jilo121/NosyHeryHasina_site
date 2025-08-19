import React, { useState } from 'react';
import { Building2, Camera, ZoomIn } from 'lucide-react';
import ImageModal from './ImageModal';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('3d');
  const [selectedImage, setSelectedImage] = useState<{src: string; alt: string; category: string} | null>(null);

  const portfolioData = {
    '3d': {
      title: 'Architecture 3D',
      icon: Building2,
      images: [
        {
          src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Rendu architectural moderne - Extérieur',
          description: 'Visualisation 3D d\'une villa contemporaine'
        },
        {
          src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Intérieur moderne minimaliste',
          description: 'Design d\'intérieur épuré et lumineux'
        },
        {
          src: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Projet résidentiel 3D',
          description: 'Complexe résidentiel avec jardins'
        },
        {
          src: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Cuisine moderne design',
          description: 'Cuisine contemporaine haut de gamme'
        },
        {
          src: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Salon moderne luxueux',
          description: 'Espace de vie élégant et confortable'
        },
        {
          src: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Chambre design contemporain',
          description: 'Suite parentale moderne et apaisante'
        }
      ]
    },
    'photo': {
      title: 'Photographie',
      icon: Camera,
      images: [
        {
          src: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Architecture urbaine moderne',
          description: 'Perspective architecturale en milieu urbain'
        },
        {
          src: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Détail architectural contemporain',
          description: 'Jeu de lumières et de formes géométriques'
        },
        {
          src: 'https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Façade moderne design',
          description: 'Élégance architecturale contemporaine'
        },
        {
          src: 'https://images.pexels.com/photos/1648774/pexels-photo-1648774.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Intérieur photographié',
          description: 'Ambiance chaleureuse et moderne'
        },
        {
          src: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Espace design minimaliste',
          description: 'Photographie d\'architecture d\'intérieur'
        },
        {
          src: 'https://images.pexels.com/photos/1648777/pexels-photo-1648777.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Composition architecturale',
          description: 'Harmonie des volumes et de la lumière'
        }
      ]
    }
  };

  const handleImageClick = (image: any, category: string) => {
    setSelectedImage({
      src: image.src,
      alt: image.alt,
      category: category === '3d' ? 'Architecture 3D' : 'Photographie'
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mon <span className="text-amber-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez mes créations dans le domaine de la visualisation 3D architecturale 
            et de la photographie professionnelle.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-2 rounded-full">
            {Object.entries(portfolioData).map(([key, data]) => {
              const Icon = data.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                  }`}
                >
                  <Icon size={20} />
                  <span>{data.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData[activeTab as keyof typeof portfolioData].images.map((image, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] hover:shadow-xl transition-all duration-300"
              onClick={() => handleImageClick(image, activeTab)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <ZoomIn className="w-12 h-12 text-white mb-2 mx-auto" />
                  <p className="text-white font-medium px-4">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}