import './App.css';
import React, {useEffect} from "react";
import Navigation from './components/navigation.component';
import Splash from './components/splash.component';
import Services from './components/services.component';
import About from './components/about.component';
import Team from './components/team.component';
import ContactSection from './components/contact-section.component';
import ContactForm from './components/contact-form.component';
import Footer from './components/footer.component';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  useEffect(() => {
    AOS.init({
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Splash />
      <Services />
      <About />
      <Team />
      <ContactSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
