import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Nirvagam from "./pages/Nirvagam";
import Mavattanirvagam from "./pages/Mavattanirvagam";
import Bylaw from "./pages/Bylaw";
import EventDetail from "./pages/EventDetail";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollTop";

import MaanilaSeyarkulu from "./pages/nirvaga/MaanilaSeyarkulu";
import MaanilaPodhukulu from "./pages/nirvaga/MaanilaPodhukulu";

import AarpatangalPorattangal from "./pages/mukkiya/AarpatangalPorattangal";
import Podhukootangal from "./pages/mukkiya/Podhukootangal";
import RecentEvents from "./pages/mukkiya/RecentEvents";

import Contact from "./pages/contact";  // Import Contact page component

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Nirvagam overview or redirect */}
        <Route path="/nirvagam" element={<Nirvagam />} />

        {/* Nirvagam subpages */}
        <Route path="/nirvagam/maanila-seyarkulu" element={<MaanilaSeyarkulu />} />
        <Route path="/nirvagam/maanila-podhukulu" element={<MaanilaPodhukulu />} />

        {/* Mukkiya subpages */}
        <Route path="/mukkiya/aarpatangal-porattangal" element={<AarpatangalPorattangal />} />
        <Route path="/mukkiya/podhukootangal" element={<Podhukootangal />} />
        <Route path="/mukkiya/recent-events" element={<RecentEvents />} />

        {/* Other existing routes */}
        <Route path="/mavattanirvagam" element={<Mavattanirvagam />} />
        <Route path="/bylaw" element={<Bylaw />} />
        <Route path="/event/:id" element={<EventDetail />} />

        {/* Contact page route */}
        <Route path="/contact" element={<Contact />} />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
