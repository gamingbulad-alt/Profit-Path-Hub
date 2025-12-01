import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import BlogSection from './components/BlogSection';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-zinc-100 min-h-screen font-sans selection:bg-brand-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <BlogSection />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;