// import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import AboutMe from '../components/AboutMe'
import PortfolioIntroduction from '../components/PortfolioIntroduction';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
        <Header />
        <Introduction />
        <AboutMe />
        <PortfolioIntroduction />
        <Footer />
        </>
    )
}

// ReactDOM.render(<Home />, document.getElementById('root'));

// const root = document.getElementById('root');
// const app = <Home />;
// createRoot(root).render(app);