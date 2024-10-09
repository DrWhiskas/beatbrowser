import React, { useEffect, useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import {
	House,
	ListVideo,
	ListPlus,
	LogIn,
	CirclePlay,
	List,
	Search,
	ListMusic
} from 'lucide-react';
import Logo from '../../media/BB.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';

export default function Header() {
	const [connected, setConnected] = useState(false);
	const [userName, setUserName] = useState('');

	const user = useSelector((state: RootState) => state.music.user);

	useEffect(() => {
		if (user.name !== '') {
			setUserName(user.name);
			setConnected(true);
		}
	}, [user.name]);

	return (
		<header className="header bgDarkBlue">
			<div className="header__container">
				<Link className="header__link" to="/">
					<img className="header__logo" src={Logo} alt="BB's logo" />
					<h1 className="header__title">BeatBrowser</h1>
				</Link>
				<div className="header__content">
					<div className="header__content__cat">
						<h2 className="header__content__cat__title">MENU</h2>
						<Link to="/home" className="header__content__link">
							<CirclePlay /> Discover
						</Link>
						<Link to="/home" className="header__content__link">
							<List /> Browse
						</Link>
						<Link to="/home" className="header__content__link">
							<Search /> Search
						</Link>
					</div>
					<div className="header__content__cat">
						<h2 className="header__content__cat__title">LIBRARY</h2>
						<Link to="/home" className="header__content__link">
							<ListMusic /> Create Playlists
						</Link>
					</div>
					<div className="header__content__cat">
						<h2 className="header__content__cat__title">ACCOUNT</h2>
						<Link to="/signin" className="header__content__link">
							<LogIn /> Sign in
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
