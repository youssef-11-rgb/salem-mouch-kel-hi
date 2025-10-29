import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Support from './pages/Support';

// Scroll to top on path change; do nothing when there's a hash
function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return; // HashLink will handle section scrolling
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* Place ScrollManager inside Router so it can access the location */}
        <ScrollManager />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route
              path="*"
              element={
                <h1 className="p-20 text-center text-3xl text-blue-600">
                  404 - Page Not Found
                </h1>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;