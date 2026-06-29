'use client';

import { useState } from 'react';
import { MapPin, Phone, Clock, Star, ChevronDown } from 'lucide-react';

export default function FrisorSalong() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const salonInfo = {
    name: "Clara's Frisörsalong",
    address: "Kungsgatan 5, Karlstad",
    phone: "054-21 21 12",
    email: "hej@clarisfrisor.se",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2156.8474385467567!2d15.586620!3d59.330283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464fa8c6a9c0a9a9%3A0x1234567890abcdef!2sKungsgatan%205!5e0!3m2!1ssv!2sse!4v1234567890",
    openingHours: {
      monday: "09:00 - 17:00",
      tuesday: "09:00 - 17:00",
      wednesday: "09:00 - 17:00",
      thursday: "09:00 - 18:00",
      friday: "09:00 - 17:00",
      saturday: "10:00 - 14:00",
      sunday: "Stängt"
    }
  };

  const services = [
    { id: 1, name: "Damklippning", price: 350, time: "45 min", description: "Professionell klippning inkluderat konsultation" },
    { id: 2, name: "Herrklippning", price: 250, time: "30 min", description: "Klassisk herrklippning eller modern style" },
    { id: 3, name: "Färgning", price: 500, time: "90 min", description: "Från rotsättning till full färgning" },
    { id: 4, name: "Slingor", price: 400, time: "60 min", description: "Strand eller delikat fokusslingar" },
    { id: 5, name: "Permanent", price: 600, time: "120 min", description: "Långvarig locktillsats" },
    { id: 6, name: "Bruduppsättning", price: 800, time: "90 min", description: "Speciell styling för ditt stora event" },
  ];

  const availableTimes = [
    "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      
      {/* HEADER */}
      <header className="bg-pink-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">{salonInfo.name}</h1>
          <p className="text-pink-100">✨ Modern frisörsalong med klassisk elegans ✨</p>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ny Look? Vi Fixar Det!</h2>
          <p className="text-pink-100 mb-6">Boka tid online eller ring oss direkt</p>
          <button 
            onClick={() => {
              console.log("Button clicked!");
              setBookingStep(1);
            }}
            className="bg-white text-pink-700 font-bold py-3 px-8 rounded-lg hover:bg-pink-50 transition cursor-pointer"
          >
            Boka Tid Nu
          </button>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* SERVICES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-pink-900">Våra Tjänster</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div 
                key={service.id}
                className="border-2 border-pink-200 rounded-lg p-4 hover:border-pink-500 cursor-pointer transition"
                onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-pink-900 text-lg">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-pink-700">{service.price} kr</p>
                    <ChevronDown size={20} className={`text-pink-500 transition ${expandedService === service.id ? 'rotate-180' : ''}`} />
                  </div>
                </div>
                {expandedService === service.id && (
                  <p className="text-gray-700 mt-3 text-sm">{service.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING SECTION */}
        <section className="bg-pink-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-pink-900">Boka Din Tid</h2>
          
          {/* STEP 1: VÄLJ TJÄNST */}
          {bookingStep === 1 && (
            <div>
              <p className="text-gray-700 mb-4">1. Välj tjänst:</p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setSelectedService(service);
                      setBookingStep(2);
                    }}
                    className="border-2 border-pink-300 rounded-lg p-4 text-left hover:bg-pink-200 transition font-semibold cursor-pointer"
                  >
                    {service.name} - {service.price} kr
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: VÄLJ TID */}
          {bookingStep === 2 && selectedService && (
            <div>
              <p className="text-gray-700 mb-2">Vald tjänst: <span className="font-bold">{selectedService.name}</span></p>
              <p className="text-gray-700 mb-4">2. Välj tid:</p>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-6">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => {
                      setSelectedTime(time);
                      setBookingStep(3);
                    }}
                    className="border-2 border-pink-300 rounded-lg p-2 hover:bg-pink-300 transition font-semibold text-sm cursor-pointer"
                  >
                    {time}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setBookingStep(1)}
                className="text-pink-600 underline text-sm cursor-pointer"
              >
                ← Tillbaka
              </button>
            </div>
          )}

          {/* STEP 3: BEKRÄFTELSE */}
          {bookingStep === 3 && selectedService && selectedTime && (
            <div className="bg-white rounded-lg p-6 border-2 border-green-300">
              <p className="text-lg font-bold text-green-700 mb-4">✓ Bokningsöversikt</p>
              <div className="space-y-2 mb-6 text-gray-700">
                <p><strong>Tjänst:</strong> {selectedService.name}</p>
                <p><strong>Tid:</strong> {selectedTime}</p>
                <p><strong>Pris:</strong> {selectedService.price} kr</p>
                <p><strong>Plats:</strong> {salonInfo.address}</p>
              </div>
              <p className="text-sm text-gray-600 mb-6">Du kan betala på plats eller via Swish: 0727434477</p>
              <div className="flex gap-3">
                <button 
                  onClick={() => {
                    alert(`Bokning klar! Vi ses ${selectedTime}. Bekräftelsemail skickat till din e-post.`);
                    setBookingStep(1);
                    setSelectedService(null);
                    setSelectedTime(null);
                  }}
                  className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition flex-1 cursor-pointer"
                >
                  Bekräfta Bokning
                </button>
                <button 
                  onClick={() => setBookingStep(2)}
                  className="text-pink-600 underline cursor-pointer"
                >
                  Ändra
                </button>
              </div>
            </div>
          )}
        </section>

        {/* INFO SECTIONS */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* ÖPPETTIDER */}
          <section className="bg-white border-2 border-pink-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="text-pink-600" size={24} />
              <h3 className="text-xl font-bold text-pink-900">Öppettider</h3>
            </div>
            <div className="space-y-2 text-gray-700 text-sm">
              {Object.entries(salonInfo.openingHours).map(([day, hours]) => (
                <div key={day} className="flex justify-between">
                  <span className="capitalize font-semibold">{day === 'monday' ? 'Mån' : day === 'tuesday' ? 'Tis' : day === 'wednesday' ? 'Ons' : day === 'thursday' ? 'Tor' : day === 'friday' ? 'Fre' : day === 'saturday' ? 'Lör' : 'Sön'}:</span>
                  <span>{hours}</span>
                </div>
              ))}
            </div>
          </section>

          {/* KONTAKT */}
          <section className="bg-white border-2 border-pink-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Phone className="text-pink-600" size={24} />
              <h3 className="text-xl font-bold text-pink-900">Kontakt</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-pink-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">{salonInfo.address}</p>
                  <p className="text-sm text-gray-600">Centrala Karlstad</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-pink-600" />
                <a href={`tel:${salonInfo.phone}`} className="font-semibold text-pink-600 hover:underline">{salonInfo.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-pink-600">📧</span>
                <a href={`mailto:${salonInfo.email}`} className="font-semibold text-pink-600 hover:underline">{salonInfo.email}</a>
              </div>
            </div>
          </section>
        </div>

        {/* GOOGLE MAPS */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-pink-900">Hitta Oss</h2>
          <iframe
            width="100%"
            height="400"
            frameBorder={0}
            src={salonInfo.googleMapsEmbed}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </section>

        {/* REVIEWS */}
        <section className="bg-white border-2 border-pink-200 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-pink-900">Vad Säger Kunderna?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Maria S.", text: "Bästa frisörsalongen i Karlstad! Alltid professionell och trevlig personal.", rating: 5 },
              { name: "Anna W.", text: "Älskar min nya färg! Precis vad jag drömde om.", rating: 5 },
              { name: "Lisa B.", text: "Snabb bokning online och flexibla tider - perfekt!", rating: 5 },
              { name: "Sofie N.", text: "Trevligt bemötande och snygg miljö. Kommer gärna tillbaka!", rating: 5 },
            ].map((review, idx) => (
              <div key={idx} className="border-l-4 border-pink-500 pl-4">
                <div className="flex mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="gold" stroke="gold" />
                  ))}
                </div>
                <p className="text-gray-700 mb-2">"{review.text}"</p>
                <p className="font-semibold text-pink-700">- {review.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-xl p-8 text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Redo för En Ny Look?</h2>
          <p className="mb-6">Boka tid idag och få en fantastisk frisöruplevelse!</p>
          <button 
            onClick={() => {
              console.log("CTA Button clicked!");
              setBookingStep(1);
            }}
            className="bg-white text-pink-700 font-bold py-3 px-8 rounded-lg hover:bg-pink-50 transition cursor-pointer"
          >
            Boka Tid Nu
          </button>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-pink-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          <p>© 2026 Clara's Frisörsalong. Alla rättigheter förbehållna.</p>
          <p className="text-pink-200">Design av webbuveckling.se</p>
        </div>
      </footer>
    </div>
  );
}