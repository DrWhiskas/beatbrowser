import React, { useState } from "react";
import './header.css'
import { Link } from "react-router-dom";
import { House, ListVideo, ListPlus, LogIn } from 'lucide-react';
import Logo from '../../media/BB.png'
import { useSelector } from "react-redux";


export default function Header(){
		
	const user = useSelector((state) => state.music.user);
		if (user !== '') {
			console.log(user);
		}
	
    return (
			<header className="header bgDarkBlue">
				<div className="header__container">
					<Link to="/">
						<img className="header__logo" src={Logo} alt="BB's logo" />
					</Link>
					<div className="header__content">
						<Link to="/home" className="header__content__link">
							<House /> Home
						</Link>
						<Link to="/playlist" className="header__content__link">
							<ListVideo /> Playlist
						</Link>
						<Link to="/playlist" className="header__content__link">
							<ListPlus /> Create Playlist
						</Link>
						<Link to="/login" className="header__content__link">
							<LogIn /> Login
						</Link>
					</div>
				</div>
			</header>
		);
}
