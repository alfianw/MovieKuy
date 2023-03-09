import React from "react";

const Card = (props) => {
    return (
        <div className={props.warp}>
            <div className={props.clas1}>
                <img src={props.img} alt="movie" id={props.idImg} />
            </div>
            <div className={props.clas2}>
                <h1 id={props.idTittel}>{props.tittle}</h1>
                <p id={props.idText}>{props.text}</p>
            </div>
        </div>
    )
}

export default Card;