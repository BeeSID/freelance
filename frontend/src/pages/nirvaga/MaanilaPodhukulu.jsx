import React from "react";
import { maanilaPodhukuluData } from "../../data/nirvagaData";

const MaanilaPodhukulu = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-16 pb-20 bg-gray-50">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-900 text-center mt-32">
        மாநில  நிகழ்வுகள்
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {maanilaPodhukuluData.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {event.title}
              </h3>
              <p className="text-gray-600 flex-grow">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MaanilaPodhukulu;
