import React from "react";
import "../variables.css"
import "./Header.css";

import smallLeft from "../icons/small-left.png";
import smallRight from "../icons/small-right.png";
import searchIcon from "../icons/search.png";

const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Left arrow" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Right arrow" />
                </button>
            </div>

            <div className="header__search">
                <img src={searchIcon} alt="" />
                <input id="search-input" maxlength="800" placeholder="What do you want to play?" type="text" />
            </div>

            <div className="header__login">
                <button className="subscribe">Sign up</button>
                <button className="login">Login</button>
            </div>
        </nav>
    )
}

export default Header;