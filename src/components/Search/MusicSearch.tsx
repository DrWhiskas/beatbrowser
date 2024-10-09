import React, { useEffect, useState } from 'react';
import MusicCard from '../MusicCard/MusicCard';
import { searchMusic } from '../../services/deezerService';
import './musicSearch.css';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function MusicSearch() {
	const [query, setQuery] = useState('Stray Kids');
	const [page, setPage] = useState<number>(1);
	const limit = 27;
	const [pageButton, setPageButton] = useState(false);
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
	const [currentPlayingId, setCurrentPlayingId] = useState<number | null>(null); // ID de la musique en lecture

	useEffect(() => {
		async function fetchMusic() {
			if (query) {
				setPageButton(true);
				const results = await searchMusic(query, page, limit);
				setMusics(results);
			} else {
				setPageButton(false);
			}
		}
		fetchMusic();
	}, [query, page]);

	async function handleSearch() {
		if (query !== '') {
			const results = await searchMusic(query, page, limit);
			setMusics(results);
		} else {
			alert('Enter a music');
		}
	}

	function handlePlay(musicId: number, previewUrl: string) {
		const newAudio = new Audio(previewUrl);

		if (currentAudio) {
			currentAudio.pause();
			currentAudio.currentTime = 0;
		}

		if (currentPlayingId === musicId) {
			setCurrentPlayingId(null);
			setCurrentAudio(null);
		} else {
			newAudio.play();
			setCurrentPlayingId(musicId);
			setCurrentAudio(newAudio);
		}
	}

	function handlePageNext() {
		setPage((prevPage) => prevPage + 1);
	}

	function handlePagePrev() {
		if (page > 1) {
			setPage((nextPage) => nextPage - 1);
		}
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
				{musics.map((music) => (
					<li className="music-search__list__item" key={music.id}>
						<MusicCard
							title={music.title}
							cover={music.album.cover}
							artist={music.artist.name}
							preview={music.preview}
							isPlaying={currentPlayingId === music.id}
							onTogglePlay={() => handlePlay(music.id, music.preview)}
						/>
					</li>
				))}
			</div>
			{pageButton && (
				<div className="btn__container">
					<button className="btn__search" onClick={handlePagePrev}>
						<ChevronLeft />
					</button>
					<button className="btn__search" onClick={handlePageNext}>
						<ChevronRight />
					</button>
				</div>
			)}
		</div>
	);
}
