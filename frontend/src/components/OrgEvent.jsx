import React from "react";
import { useParams } from "react-router-dom";
import { orgEvents } from "../data/nirvagaData";

const Orgevent = () => {
  const { category } = useParams();

  // Find category matching the URL param (ignore case)
  const eventCategory = orgEvents.find(
    (item) => item.name === decodeURIComponent(category)
  );

  if (!eventCategory) {
    return <p className="p-4 pt-24 md:p-6 md:pt-52 text-center text-red-600">பொருத்தமான நிகழ்வுகள் இல்லை.</p>;
  }

  return (
    <main className="p-4 pt-24 md:p-6 md:pt-52 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">{eventCategory.name}</h1>
      <div className="space-y-8">
        {eventCategory.subItems.map((event, idx) => (
          <div key={idx} className="border rounded shadow p-4">
            <h2 className="font-semibold text-2xl mb-2">{event.title}</h2>
            <img
              src={event.image}
              alt={event.title}
              className="w-full max-w-md mx-auto rounded mb-4"
            />
            <p className="text-lg">{event.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Orgevent;
