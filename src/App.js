import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
