import { useState } from 'react'
import './App.css'
import AboutSection from './assets/About'
import ContactSection from './assets/Contact'
import PortfolioSection from './assets/Portfolio'
import ResumeSection from './assets/Resume'




  const Navigation = ({ activeSection, setActiveSection }) => {
    const navigateToSection = (sectionId) => {
        window.location.hash = sectionId;
        setActiveSection(sectionId);
    };


    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-2">
                            <a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} href="#about" onClick={() => navigateToSection('about')}>
                                About Me
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`} href="#portfolio" onClick={() => navigateToSection('portfolio')}>
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} href="#contact" onClick={() => navigateToSection('contact')}>
                                Contact
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`} href="#resume" onClick={() => navigateToSection('resume')}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};



const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
      <div>
          <header>
              <Navigation setActiveSection={setActiveSection} />
          </header>

              <h1 className='mt-5'>Chris Davis</h1>
          {activeSection === 'about' && <AboutSection />}
          {activeSection === 'portfolio' && <PortfolioSection />}
          {activeSection === 'contact' && <ContactSection />}
          {activeSection === 'resume' && <ResumeSection />}

          {/* <footer>
          <Footer />
          </footer> */}
      </div>
  );
};

export default App
