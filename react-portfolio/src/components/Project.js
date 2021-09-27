import React, {useState} from 'react';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import './Project.css'

function Project() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'ContactInfo') {
            return <ContactMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div id="Project">
          <Header />
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
          <Footer />
        </div>
      );
    }   
      
export default Project;