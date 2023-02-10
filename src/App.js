import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
import Section2 from './components/Section2';
import Banner from "./components/Banner"
import Section4 from './components/Section4';
import Section3 from './components/Section3';
import SkillsSection from './components/SkillsSection';
import PriceCards from './components/PriceCards';
import Banner2 from './components/Banner2';
import Support from './components/Support';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <HeroSection />
      <Cards />
      <Section2></Section2>
      <Banner></Banner>
      <Section3></Section3>
      <Section4></Section4>
      <SkillsSection></SkillsSection>
      <Banner2></Banner2>
      <PriceCards></PriceCards>
      <Support></Support>
      <Footer></Footer>
    </div>
  );
}

export default App;
