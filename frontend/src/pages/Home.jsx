import React from "react";
import { Link } from "react-router-dom";

import {
  aarpatangalPorattangalData,
  podhukootangalData,
  recentEventsData,
} from "../data/mukkiyaData";
import {
  maanilaSeyarkuluData,
  maanilaPodhukuluData,
} from "../data/nirvagaData";

const Home = () => {
  return (
    <main className="px-6 py-8 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center mt-52">
        முக்கிய நிகழ்வுகள் & நிர்வாக நிகழ்வுகள்
      </h1>

      {/* Mukkiya Section */}
      <section className="space-y-14">
        {/* Recent Events */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-black-700 border-b-4 border-coral-400 pb-2">
            சமீபத்திய நிகழ்வுகள்
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recentEventsData.slice(0, 3).map((event) => (
              <Link
                to="/mukkiya/recent-events"
                key={event.id}
                className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
              >
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900">{event.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Aarpatangal & Porattangal */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-black-700 border-b-4 border-teal-400 pb-2">
            ஆர்ப்பாட்டங்கள் & போராட்டங்கள்
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {aarpatangalPorattangalData.slice(0, 3).map((event) => (
              <Link
                to="/mukkiya/aarpatangal-porattangal"
                key={event.id}
                className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
              >
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900">{event.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Podhukootangal */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-black-700 border-b-4 border-cyan-400 pb-2">
            பொதுக் கூட்டங்கள்
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {podhukootangalData.slice(0, 3).map((event) => (
              <Link
                to="/mukkiya/podhukootangal"
                key={event.id}
                className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
              >
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900">{event.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        
      </section>

      {/* Nirvagam Section */}
      <section className="mt-20 space-y-14">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900 text-center">
          நிர்வாக நிகழ்வுகள்
        </h2>

        {/* Maanila Seyarkulu */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-black-800 border-b-4 border-teal-600 pb-2">
            மாநிலச் செயற்குழு
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {maanilaSeyarkuluData.slice(0, 3).map((event) => (
              <Link
                to="/nirvagam/maanila-seyarkulu"
                key={event.id}
                className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
              >
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900">{event.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Maanila Podhukulu */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-black-800 border-b-4 border-cyan-600 pb-2">
            மாநிலப் பொதுக்குழு
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {maanilaPodhukuluData.slice(0, 3).map((event) => (
              <Link
                to="/nirvagam/maanila-podhukulu"
                key={event.id}
                className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
              >
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900">{event.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
