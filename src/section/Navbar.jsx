import React from "react";

export default function Navbar() {
    return (
        <div className="flex font-medium gap-6 text-2xl justify-end p-16">
            <div className="hover:cursor-pointer">Works</div>
            <div className="hover:cursor-pointer">Blog</div>
            <div className="hover:cursor-pointer">Contact</div>
        </div>
    );
}
