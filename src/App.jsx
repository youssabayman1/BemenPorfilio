import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div className="app-container">
      <div className="bg-gradient-blob blob-1"></div>
      <div className="bg-gradient-blob blob-2"></div>
      
      <main className="container">
        <Hero />
        <Experience />
        <Skills />
        <Education />
      </main>
    </div>
  );
}

export default App;
