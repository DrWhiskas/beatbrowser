import React from "react";
import './home.css'

import Header from "../../components/Header/Header";
import MusicSearch from "../../components/Search/MusicSearch";

export default function Home(){
    return (
			<section className="home bgBlue ">
                <Header />
				<MusicSearch />
			</section>
		);
}