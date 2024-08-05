import React from "react";
import './header.css'
import { Link } from "react-router-dom";
import { House } from "lucide-react";
import Logo from '../../media/BB.png'
export default function Header(){
    return (
			<header className="header bgDarkBlue">
				<div className="header__container">
					<Link to="/">
						<img className="header__logo" src={Logo} alt="BB's logo" />
					</Link>
					<div className="header__content">
						<Link to="" className="header__content__link">
							<House /> Home
						</Link>
						<Link to="" className="header__content__link">
							<House /> Home
						</Link>
						<Link to="" className="header__content__link">
							<House /> Home
						</Link>
					</div>
				</div>

				<Link to="/login">Login</Link>
			</header>
		);
}