import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    window.location.pathname;
    return (
        <div className="flex font-medium gap-6 text-2xl justify-end p-16">
            <div className="hover:cursor-pointer">
                <NavLink
                    to="/works"
                    className={({ isActive }) =>
                        isActive ? "text-red-500 underline" : "text-black"
                    }
                >
                    Works
                </NavLink>
            </div>
            <div className="hover:cursor-pointer">
                <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                        isActive ? "text-red-500 underline" : "text-black"
                    }
                >
                    Blog
                </NavLink>
            </div>
            <div className="hover:cursor-pointer">
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "text-red-500 underline" : "text-black"
                    }
                >
                    Contact
                </NavLink>
            </div>
        </div>
    );
}
