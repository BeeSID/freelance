import React from "react";
import { podhukootangalData } from "../../data/mukkiyaData";

const Podhukootangal = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-16 pb-20 bg-gray-50">
      <h1 className="text-4xl font-extrabold mb-12 text-gray-900 text-center mt-16">
        பொதுக்கூட்டங்கள்
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {podhukootangalData.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-56 object-cover rounded-t-xl"
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

export default Podhukootangal;
