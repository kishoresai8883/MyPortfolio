import './App.css';
import Header from './Components/Header/header.jsx'
import About from './Components/About/about.jsx'
import Contact from './Components/Contact/contact.jsx'
import Experience from './Components/Experience/experience.jsx'
import Footer from './Components/Footer/footer.jsx'
import Nav from './Components/Navbar/nav.jsx';
import Portfolio from './Components/Portfolio/portfolio.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
