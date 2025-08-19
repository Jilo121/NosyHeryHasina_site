import React from 'react';
import { Building, Camera, Award, Users } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: Building,
      title: 'Architecture 3D',
      description: 'Modélisation et rendu de projets architecturaux avec une précision technique exceptionnelle.'
    },
    {
      icon: Camera,
      title: 'Photographie',
      description: 'Capture des moments uniques avec un œil artistique développé et une maîtrise technique.'
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Plus de 5 ans d\'expérience dans la visualisation architecturale et la photographie.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Travail en étroite collaboration avec architectes, designers et clients pour des résultats optimaux.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              À propos de <span className="text-amber-600">moi</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Passionné par la création visuelle, je combine expertise technique et vision artistique 
              pour donner vie aux projets architecturaux et capturer la beauté du monde qui nous entoure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                    <p className="text-gray-700 leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Une approche unique
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Mon expertise en visualisation 3D architecturale et ma passion pour la photographie 
              me permettent d'offrir une perspective complète sur vos projets. Chaque création est 
              le fruit d'une attention minutieuse aux détails et d'une compréhension approfondie 
              des besoins clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}