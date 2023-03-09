import React from "react";
import "../style/Header.css"
import Button from "./Button";
import imgHeader from "../asset/movieHeader.png"
import { useNavigate } from "react-router-dom"
import play from "../asset/play.png"
import download from "../asset/download.png"

// 2C9F4D

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="header">
            <div className="article">
                <h1><span id="movieText">Movie</span> Kuy!</h1>
                <h2>Film, acara TV tak terbatas, dan lebih banyak lagi.</h2>
                <h3>Tonton di mana pun dan di perangkat apa pun</h3>
                <div className="btn">
                    <Button
                        id="film"
                        img={play}
                        url="/films"
                        text="Tonton Film"
                    />
                    <Button
                        id="film"
                        img={download}
                        url="/download"
                        text="Download Aplikasi"
                    />
                </div>
            </div>
            <div className="img">
                <img src={imgHeader} alt="movie" id="imgHeader" />
            </div>
        </div>
    )
}

export default Header;