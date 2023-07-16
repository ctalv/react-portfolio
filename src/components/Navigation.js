// A single Navigation component within the header that will be used to conditionally 
// render the different sections of your portfolio

// child of the header 

import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    href="#abpit"
                    onClick={() => handlePageChange('About')}
                    // This is a ternary operator. It checks if the value of 'currentPage' is equal to 'Home'. If true, it assigns the value 'nav-link active' to the className, indicating that the tab should be active. Otherwise, it assigns the value 'nav-link', indicating an inactive tab.
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    // This logic checks if the value of 'currentPage' is equal to 'About'. If true, it assigns the value 'nav-link active' to the className, indicating that the tab should be active. Otherwise, it assigns the value 'nav-link', indicating an inactive tab.
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    // This logic checks if the value of 'currentPage' is equal to 'Blog'. If true, it assigns the value 'nav-link active' to the className, indicating that the tab should be active. Otherwise, it assigns the value 'nav-link', indicating an inactive tab.
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    // This logic checks if the value of 'currentPage' is equal to 'Contact'. If true, it assigns the value 'nav-link active' to the className, indicating that the tab should be active. Otherwise, it assigns the value 'nav-link', indicating an inactive tab.
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
        </ul>
    );
}