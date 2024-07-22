import React, { useEffect, useState } from 'react';
import MusicCard from '../MusicCard/MusicCard';
import { searchMusic } from '../../services/deezerService';
import './musicSearch.css';

export default function MusicSearch() {
	const [query, setQuery] = useState('');
	const [page, setPage] = useState<number>(0)
	const limit = 30

	const [musics, setMusics] = useState<
		Array<{
			id: number;
			title: string;
			artist: { name: string };
			album: { cover: string };
			preview: string;
		}>
	>([]);

	const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
		null
	);
	
	useEffect(() => {
		async function fetchMusic () {
			if(query){
				const results = await searchMusic(query, page, limit);
				setMusics(results);
				console.log(results);
				console.log(page);
				
			}
		}
	}, [query, page])


	async function handleSearch() {
		const results = await searchMusic(query);
		setMusics(results);
		console.log(results);
	}

	function handlePlay(audio: HTMLAudioElement) {
		if (currentAudio && currentAudio !== audio) {
			currentAudio.pause();
			currentAudio.currentTime = 0;
		}
		setCurrentAudio(audio);
	}
	return (
		<div className="music-search">
			<div className="music-search__header bDarkBlue">
				<input
					className="music-search__input tWhite"
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search songs, artists, album, ..."
				/>
				<button className="music-search__btn" onClick={handleSearch}>
					Search
				</button>
			</div>
			<div className="music-search__list">
				{musics.map((music, key) => (
					<li className="music-search__list__item" key={music.id}>
						<MusicCard
							title={music.title}
							cover={music.album.cover}
							artist={music.artist.name}
							preview={music.preview}
							onPlay={handlePlay}
						/>
					</li>
				))}
			</div>
		</div>
	);
}
