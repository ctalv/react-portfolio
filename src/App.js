import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation'; // child of Header
import Project from './components/Project';
import Footer from './components/Footer';



export default function App() {
    return (
        <div>
            <Header/>
            <Navigation/> {/* do i need this? */}
            <Project/>
            <Footer/>
        </div>
    )
}

// child --> parent