import React from 'react';
// import components
import Header from './components/Header';
import Navigation from './components/Navigation'; // child of Header
import Project from './components/Project';
import Footer from './components/Footer';



export default function App() {
    // // sets the About page as the default page
    // const [currentPage, setCurrentPage] = useState('About')

    // // This method renders the appropriate page component based on the value of currentPage state.
    // const renderPage = () => {
    //     if (currentPage === 'About') {
    //         return <About />;
    //     }
    //     if (currentPage === 'Portfolio') {
    //         return <Portfolio />;
    //     }
    //     if (currentPage === 'Resume') {
    //         return <Resume />;
    //     }
    //     return <Contact />;
    // };

    // const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div>
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