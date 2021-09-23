import React, {useState} from 'react';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import AboutMe from './pages/AboutMe';
import ContactInfo from './pages/ContactInfo';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function Project() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'ContactInfo') {
            return <ContactInfo />;
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
        <div>
          <Header />
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          <Footer />
          {renderPage()}
        </div>
      );
    }   
      
export default Project;