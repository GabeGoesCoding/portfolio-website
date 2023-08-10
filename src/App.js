import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import PortfolioProjectPage from "../src/components/PortfolioProjectPage";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolioProjectPage" element={<PortfolioProjectPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
