// importing packages
import { useState } from "react";

// importing components
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import RecentPosts from "./section/RecentPosts";
import FeaturedWorks from "./section/FeaturedWorks";
import SocialMedia from "./section/SocialMedia";

export default function App() {
    return (
        <div className="">
            <Navbar />
            <main className="">
                <Hero />
                <RecentPosts />
                <FeaturedWorks />
                <SocialMedia />
            </main>
        </div>
    );
}
