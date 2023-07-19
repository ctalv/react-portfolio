import React from 'react';
// import components
import Header from './components/Header';
import Footer from './components/Footer';

import './assets/style/style.css';

const styles = {
    everythingStyle: {
    fontFamily: 'Open sans, sans-serif',
}
}

export default function App() {

    return (
        <div style={styles.everythingStyle}>
            {/* We are passing the currentPage state and handlePageChange function as props to the NavTabs component. */}
            <Header/>
            {/* The renderPage function is called here to render the appropriate page component based on the value of currentPage state. */}
            
            {/* <Navigation/> do i need this? is this where I pass in page logic? */}
            {/* <Project/> use conditional logic for page rendering */}
            <Footer/>
        </div>
    )
}

// child --> parent
// eslint error in compiling?