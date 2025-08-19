import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState<null | boolean>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setIsSuccess(null);
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // "⚠️ Configuration EmailJS manquante. Vérifie VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID et VITE_EMAILJS_PUBLIC_KEY dans ton fichier .env.local"
    if (!serviceId || !templateId || !publicKey) {
      setIsSending(false);
      setIsSuccess(false);
      setErrorMessage(
        "Oups, Erreur survenue"
      );
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
          // ⚠️ ces noms doivent correspondre EXACTEMENT aux variables dans ton template EmailJS
        },
        publicKey
      );

      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("Erreur EmailJS:", error);
      setIsSuccess(false);
      setErrorMessage("Échec de l'envoi. Vérifie ta configuration EmailJS.");
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Restons en <span className="text-amber-400">contact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter 
              de vos besoins en visualisation 3D ou photographie.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Bloc Infos */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-300">nosyhery.hasina@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <p className="text-gray-300">+261 34 13 414 35</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-medium">Localisation</p>
                      <p className="text-gray-300">Nanisana, Antananarivo, Madagascar</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 p-6 rounded-2xl border border-amber-500/20">
                <MessageCircle className="w-8 h-8 text-amber-400 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Prêt à collaborer ?</h4>
                <p className="text-gray-300 text-sm">
                  Je suis disponible pour de nouveaux projets et collaborations. 
                  Contactez-moi pour discuter de vos idées !
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSending}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors duration-200 text-white"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSending}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors duration-200 text-white"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSending}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors duration-200 text-white"
                    placeholder="Projet de visualisation 3D, Photographie..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    disabled={isSending}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors duration-200 text-white resize-none"
                    placeholder="Décrivez votre projet et vos besoins..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="group w-full md:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold px-8 py-4 rounded-lg hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>{isSending ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                </button>

                {isSuccess === true && (
                  <p className="text-green-400">✅ Message envoyé avec succès.</p>
                )}
                {isSuccess === false && errorMessage && (
                  <p className="text-red-400">❌ {errorMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
