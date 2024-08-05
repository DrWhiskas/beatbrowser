import React, { useEffect, useState } from 'react';
import MusicCard from '../MusicCard/MusicCard';
import { searchMusic } from '../../services/deezerService';
import './musicSearch.css';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import GenreMusic from '../Genre/Genre';
export default function MusicSearch() {
	const [query, setQuery] = useState('Stray Kids');
	const [page, setPage] = useState<number>(1);
	const limit = 30;
	const [pageButton, setPageButton] = useState(false)
	const prevPage = 0;
	const nextPage = 0;

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
		async function fetchMusic() {
			if (query) {
				setPageButton(true)
				const results = await searchMusic(query, page, limit);
				console.log(results);
				
				setMusics(results);
			}else{
				setPageButton(false);
			}
		}
		fetchMusic();
	}, [query, page]);

	async function handleSearch() {
		if (query !== '') {
			const results = await searchMusic(query);
			setMusics(results);
		} else {
			alert('Enter a music');
			return 0;
		}
	}
	function handlePageNext() {
		if (page !== 1) {
			setPage((prevPage) => prevPage + 1);
		} else {
			setPage((page) => page + 1);
		}
	}
	function handlePagePrev() {
		if (page > 1) {
			setPage((nextPage) => nextPage - 1);
		} else {
			return 0;
		}
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
			{query ? (
				<div className='btn__container'>
					<button className="btn__search" onClick={handlePagePrev}>
						<ChevronLeft />
					</button>
					<button className="btn__search" onClick={handlePageNext}>
						<ChevronRight />
					</button>
				</div>
			) : (
				<></>
			)}

			<GenreMusic />
		</div>
	);
}
