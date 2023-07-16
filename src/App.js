import React, { useState } from 'react';
// import components
import Header from './components/Header';
import Navigation from './components/Navigation'; // child of Header
import Project from './components/Project';
import Footer from './components/Footer';

// import pages
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';

export default function App() {
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
            {/* We are passing the currentPage state and handlePageChange function as props to the NavTabs component. */}
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* The renderPage function is called here to render the appropriate page component based on the value of currentPage state. */}
            {renderPage()}
            {/* <Navigation/> do i need this? is this where I pass in page logic? */}
            {/* <Project/> use conditional logic for page rendering */}
            <Footer />
        </div>
    )
}

// child --> parent
// eslint error in compiling?