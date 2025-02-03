import React from "react";
import "./Footer.css"

const Footer = () => {
    return(
        <footer class="footer">
            <div class="footer__content">
                <div class="footer__text">
                    <span class="bold">
                        Preview of Spotify
                    </span>
                    <span>
                        Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
                    </span>
                </div>
                <button class="footer__button">
                    Sign up free
                </button>
            </div>
        </footer>
    )
}

export default Footer;