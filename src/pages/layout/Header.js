import React from "react";
import { Link  } from "react-router-dom";
import "../../css/header.css"

export default function Header() {

    return (
        <nav className="nav-container">
            <Link to="/">
                <img className="logo" src="../assets/images/logo.jpg" alt="Logo icon of ShoppyWare"/>
            </Link>
            <ul className="nav-links">
                <li><Link className="hover-underline-animation" to="/">Home</Link></li>
                <li>
                    <Link className="cart-wrapper" to="/cart">
                        <span className="hover-underline-animation">Cart</span>
                        <img className="icon" src="../assets/images/shopping-cart.png" alt="Shoppin cart icon"/>
                    </Link>
                </li>
            </ul>
            <Link className="mobile" to="/cart">
                <img src="../assets/images/shopping-cart.png" alt="Shoppin cart icon"/>
            </Link>
        </nav>
    )
}