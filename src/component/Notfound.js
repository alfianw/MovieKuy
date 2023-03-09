import React from "react";
import error from "../asset/error.png"
import "../style/Notfound.css"

const Notfound = () => {
    return (
        <div className="error">
            <img src={error} alt="" id="imgError" />
            <h1>Halaman tidak ditemukan Broooo!! </h1>
        </div>
    )
}

export default Notfound;