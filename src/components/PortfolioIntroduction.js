
// export default function PortfolioIntroduction() {
//     const portfolioLink = "./portfolio"

//     return (
//         <div className="portfolioIntroduction">
//             <a href="./portfolio">Portfolio</a>
//             <button onClick={portfolioLink} className="custom-button">
//                 Portfolio
//             </button>
//         </div>
//     )
// }

import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using it for routing

export default function PortfolioIntroduction() {

    return (
        <div className="portfolioIntroduction">
            <button onClick={() => window.location.href = "./portfolio"} className="portfolio-button">
                View My Portfolio
            </button>
        </div>
    );
}