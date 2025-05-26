import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

const recentEvents = [
  {
    id: 1,
    title: "புதிய கலை நிகழ்ச்சி",
    imageUrl: "https://example.com/event1.jpg",
    description:
      "தமிழ் கலைஞர்கள் கலந்து கொண்ட புதிய கலை நிகழ்ச்சி. முழு விவரம் இங்கே...",
  },
  {
    id: 2,
    title: "சமூக சேவை",
    imageUrl: "https://example.com/event2.jpg",
    description:
      "சுற்றுலா பகுதிகளில் நடைபெற்ற சமூக சேவை. முழு விவரம் இங்கே...",
  },
  {
    id: 3,
    title: "மகா திருவிழா",
    imageUrl: "https://example.com/event3.jpg",
    description:
      "பெரும் மகா திருவிழா புகைப்படங்கள் மற்றும் விவரங்கள். முழு விவரம் இங்கே...",
  },
];

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = recentEvents.find((e) => e.id === Number(id));
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  if (!event) {
    return (
      <main className="p-4">
        <h2 className="text-xl font-bold" tabIndex={-1} ref={headingRef}>
          Event not found
        </h2>
        <button
          onClick={() => navigate("/events")} // Navigate to a fixed events page if you have one
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          aria-label="Go back to events list"
        >
          Go Back
        </button>
      </main>
    );
  }

  return (
    <main className="p-4">
      <h1
        className="text-3xl font-bold mb-4"
        tabIndex={-1}
        ref={headingRef}
      >
        {event.title}
      </h1>
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full max-w-4xl mb-6 rounded"
        loading="lazy"
      />
      <p>{event.description}</p>
      <button
        onClick={() => navigate("/events")} // Navigate to a fixed events page
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
        aria-label="Back to events list"
      >
        Back to Events
      </button>
    </main>
  );
};

export default EventDetail;
