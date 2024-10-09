import React from "react";
import './home.css'

import Header from "../../components/Header/Header";
import MusicSearch from "../../components/Search/MusicSearch";
import GenreMusic from "../../components/Genre/Genre";
export default function Home(){
    return (
			<section className="home">
                <Header />
				<MusicSearch />
				<GenreMusic />
				
			</section>
		);
}