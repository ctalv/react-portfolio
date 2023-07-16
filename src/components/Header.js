// A single Header component that appears on multiple pages

// parent of Navigation

import React, { useState } from 'react';
import Navigation from './Navigation';

// import pages
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Header() {
        // sets the About page as the default page
        const [currentPage, setCurrentPage] = useState('About')

        // This method renders the appropriate page component based on the value of currentPage state.
        const renderPage = () => {
            if (currentPage === 'About') {
                return <About />;
            }
            if (currentPage === 'Portfolio') {
                return <Portfolio />;
            }
            if (currentPage === 'Resume') {
                return <Resume />;
            }
            return <Contact />;
        };
    
        const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <h1>Claire Alverson</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    );
}