import "./TopSection.css";

import { Header } from "./Header/Header"
import { Hero } from "./Hero/Hero"

export const TopSection = () => {
    return (
        <div className="top-section">
            <Header />
            <Hero />
        </div>
    )
}