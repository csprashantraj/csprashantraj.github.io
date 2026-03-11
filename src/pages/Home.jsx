import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import CompetitiveProgramming from '../components/CompetitiveProgramming';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <CompetitiveProgramming />
      <Contact />
    </div>
  );
};

export default Home;
