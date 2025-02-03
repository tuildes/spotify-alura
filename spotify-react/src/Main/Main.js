import React from "react";

import "./Artist.css";
import "./Main.css";

import coverImage from "../playlist/14.jpeg";

const Main = () => {
    return(
        <div>
            <main>
                <div class="main-container">
                    <div id="result-artist" class="main__content hidden">
                        <div class="main__library">
                            <div class="artist-card" id="">
                            <div class="card-img">
                                <img id="artist-img" class="artist-img" />
                                <div class="play">
                                <span class="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div class="card-text">
                                <a title="Foo Fighters" class="vst" href="">
                                    <span class="artist-name" id="artist-name"></span>
                                    <span class="artist-categorie">Artista</span>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div id="result-playlists" class="main__content">
                        <div class="main__title">
                            <span>
                                Browse all sections
                            </span>
                        </div>
                        <div class="main__library">
                            <a href="">
                                <div class="card">
                                    <span>
                                        Chill Vibes
                                    </span>
                                    <img src={coverImage} alt="Chill Vibes" />
                                </div>
                            </a>
                            <a href="">
                                <div class="card">
                                    <span>
                                        Chill Vibes
                                    </span>
                                    <img src={coverImage} alt="Chill Vibes" />
                                </div>
                            </a>
                            <a href="">
                                <div class="card">
                                    <span>
                                        Chill Vibes
                                    </span>
                                    <img src={coverImage} alt="Chill Vibes" />
                                </div>
                            </a>
                            <a href="">
                                <div class="card">
                                    <span>
                                        Chill Vibes
                                    </span>
                                    <img src={coverImage} alt="Chill Vibes" />
                                </div>
                            </a>
                            <a href="">
                                <div class="card">
                                    <span>
                                        Chill Vibes
                                    </span>
                                    <img src={coverImage} alt="Chill Vibes" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main;