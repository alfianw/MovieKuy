import React from "react";
import "../style/Footer.css"
import footerImg from "../asset/ask.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="cardFooter">
            <img src={footerImg} alt="movie" id="footerImg" />
            <div className="articFooter">
                <h1>Apa itu <span id="movieText">Movie</span> Kuy! ?</h1>
                <p id="textFooter">Movie Kuy! adalah layanan streaming yang menawarkan berbagai acara TV pemenang penghargaan, film, anime, dokumenter, dan banyak lagi di ribuan perangkat yang terhubung ke Internet. Kamu bisa menonton sepuasnya, kapan pun kamu mau, tanpa satu iklan pun semuanya bisa di akses secara GRATIS. Selalu ada tontonan baru dan acara TV serta film baru yang ditambahkan setiap minggu!</p>
            </div>
            </div>
            <h1>© 2023 Muhamad Alfian Widjaya</h1>
        </div>
    )
}

export default Footer;