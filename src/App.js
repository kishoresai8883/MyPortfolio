import './App.css';
import Header from './Components/Header/header.jsx'
import About from './Components/About/about.jsx'
import Contact from './Components/Contact/contact.jsx'
import Experience from './Components/Experience/experience.jsx'
import Skills from './Components/Skills/skills.jsx'
import Footer from './Components/Footer/footer.jsx'
import Services from './Components/Services/services.jsx';
import Nav from './Components/Navbar/nav.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Skills/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
