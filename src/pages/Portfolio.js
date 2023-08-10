import Header from '../components/Header'
import PortfolioPageSection from '../components/PortfolioPageSection'
import Footer from '../components/Footer'

export default function MyPortfolio() {
    return (
        <>
        <Header />
        <PortfolioPageSection />
        <Footer />
        </>
    )
}

// ReactDOM.render(<MyPortfolio />, document.getElementById('portfolioRoot'));

// const root = document.getElementById('portfolioRoot');
// const app = <MyPortfolio />;
// createRoot(root).render(app);