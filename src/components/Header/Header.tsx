import React from "react";
import './header.css'
import { Link } from "react-router-dom";
import Logo from '../../media/BB.png'
export default function Header(){
    return (
			<header className="header bgDarkBlue">
				<Link to="/">
					<img className="header__logo" src={Logo} alt="BB's logo" />
				</Link>
			</header>
		);
}