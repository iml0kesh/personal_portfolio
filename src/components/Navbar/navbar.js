import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="navbar__container">
                <div className="navbar__title">Title</div>
                <div className="navbar__sections">
                    <ul>
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>Projects</li></a>
                        <a href="#"><li>Technologies</li></a>
                    </ul>
                </div>
                <div className="navbar__links">Links</div>
            </div>
        </>
    );
}

export default Navbar;