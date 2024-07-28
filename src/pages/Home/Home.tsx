import React from "react";
import './home.css'

import Header from "../../components/Header/Header";
import MusicSearch from "../../components/Search/MusicSearch";
import RadioMusic from "../../components/Radio/Radio";
export default function Home(){
    return (
			<section className="home">
                <Header />
				<MusicSearch />
				
			</section>
		);
}