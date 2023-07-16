// A single Header component that appears on multiple pages

// parent of Navigation

import React from 'react';
import Navigation from './Navigation';

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