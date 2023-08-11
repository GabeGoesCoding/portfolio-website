import { createRoot } from 'react-dom/client';
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
