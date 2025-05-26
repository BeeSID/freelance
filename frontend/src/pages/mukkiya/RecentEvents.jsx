import React from "react";
import { recentEventsData } from "../../data/mukkiyaData";

const RecentEvents = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-16 pb-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-10 text-gray-800 text-center mt-32">
        சமீபத்திய நிகழ்வுகள்
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recentEventsData.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {event.title}
              </h3>
              <p className="text-gray-700 flex-grow">{event.description}</p>
              {/* Optional button */}
              {/* <button className="mt-4 self-start bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Read More
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default RecentEvents;
