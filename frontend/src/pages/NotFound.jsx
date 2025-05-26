import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - பக்கம் கிடைக்கவில்லை</h1>
      <p className="mb-6">தவறான முகவரியில் நீங்கள் உள்ளீர்கள்.</p>
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        முகப்புக்கு செல்ல
      </button>
    </main>
  );
};

export default NotFound;
