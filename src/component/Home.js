import React from "react";
import '../style/Home.css'
import Card from "./Card";
import Header from "./Header";
import tv from "../asset/tv.png"
import bareng from "../asset/bareng.png"
import sendiri from "../asset/sendiri.png"
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <div className="home">
                <Header />
                <Card
                    warp="warp"
                    clas1=""
                    clas2="warpArtic"
                    img={tv}
                    idImg="imgTv"
                    idTittel="tittle"
                    idText="text"
                    tittle="Nikmati di TV-mu."
                    text="Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi."
                />
                <Card
                    warp="warp1"
                    clas1=""
                    clas2="warpArtic"
                    img={bareng}
                    idImg="imgTv"
                    idTittel="tittle"
                    idText="text"
                    tittle="Download acara TV untuk menontonnya secara offline."
                    text="Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton."
                />
                <Card
                    warp="warp"
                    clas1=""
                    clas2="warpArtic"
                    img={sendiri}
                    idImg="imgTv"
                    idTittel="tittle"
                    idText="text"
                    tittle="Tonton di mana pun."
                    text="Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu."
                />
                <Footer/>
            </div>
        </>
    )
}

export default Home;