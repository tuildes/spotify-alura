import React from "react";
import "./Sidebar.css"

import spotifyLogo from "../icons/logo-spotify.png"

const Sidebar = () => {
    return(
        <div class="sidebar">
            <div class="sidebar__background">
                <nav class="sidebar__navigation">
                    <div class="sidebar__logo">
                        <a href="#">
                            <img src={spotifyLogo} alt="Spotify`s logo" />
                        </a>
                    </div>
                    <ul>
                        <li>
                            <a href="#">
                                <span class="fa fa-home"></span>
                                <span class="sidebar__text">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="fa fa-search"></span>
                                <span class="sidebar__text">Search</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div class="library">
                    <div class="library__content">
                        <button class="library__button">
                            <span class="fa fa-book"></span>
                            <span>Your Library</span>
                        </button>
                        <span class="fa fa-plus"></span>
                    </div>

                    <section class="sidebar-playlist">
                        <div class="sidebar-playlist__content">
                            <h1>Create your first playlist</h1>
                            <h4>It`s easy, we`ll help you</h4>
                            <button>Create Playlist</button>
                        </div>
                    </section>

                    <section class="sidebar-playlist">
                        <div class="sidebar-playlist__content">
                            <h1>Let's find some podcasts to follow</h1>
                            <h4>We'll keep you updated on new episodes</h4>
                            <button>Browse Podcasts</button>
                        </div>
                    </section>

                    <div class="sidebar-cookies">
                        <a href="#">Cookies</a>
                    </div>
        
                    <div class="sidebar-language">
                        <button class="sidebar-language__button">
                            <span class="fa fa-globe"></span>
                            <span> English </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;