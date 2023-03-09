import React from "react";
import'../style/Navbar.css'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".navMenu");
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      };

    return (
        <div className='navbar'>
            <nav>
            <h1><span id="movieText">Movie</span> Kuy!</h1>
                <ul className='navMenu'>
                    <li className='navItem'><button id="button" onClick={() => navigate('/')}>Home</button></li>
                    <li className='navItem'><button id="button" onClick={() => navigate('/films')}>Film</button></li>
                </ul>

                <div className='hamburger' onClick={handleClick}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>

            </nav>
        </div>
    )

}

export default Navbar;