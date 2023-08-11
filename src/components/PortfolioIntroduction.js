import { Link } from 'react-router-dom';

export default function PortfolioIntroduction() {
  return (
    <div className="portfolioIntroduction">
      <Link to="/portfolio" className="portfolio-button">
        View My Portfolio
      </Link>
    </div>
  );
}