import React from "react";
import { useNavigate } from "react-router-dom";

const Button = (props)=>{
    const navigate = useNavigate()
    return(
        <button id={props.id} onClick={() => navigate(props.url)}>
        <img src={props.img} alt="movie" id="" />
        <p>{props.text}</p>
    </button>
    )
}

export default Button;