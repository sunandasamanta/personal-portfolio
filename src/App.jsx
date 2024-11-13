// importing packages
import { useState } from "react";

// importing components
import Hero from "./section/Hero";
import RecentPosts from "./section/RecentPosts";
import FeaturedWorks from "./section/FeaturedWorks";

export default function App() {
    console.log("App component is rendered");

    return (
        <main className="">
            <Hero />
            <RecentPosts />
            <FeaturedWorks />
        </main>
    );
}
