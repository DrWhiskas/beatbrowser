import React, { useRef, useState } from 'react';
import './musicCard.css';
import { Link } from 'react-router-dom';
import { Play, CirclePlus, Pause } from 'lucide-react';

interface MusicCardProps {
	title?: string;
	artist?: string;
	album?: string;
	cover?: string;
	preview?: string;
	music?: string;
	onPlay: (audio: HTMLAudioElement) => void;
}

export default function MusicCard({ ...props }: MusicCardProps) {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	function togglePlay() {
		const audio = audioRef.current;
		if (audio) {
			if (isPlaying) {
				audio.pause();
			} else {
				audio.play();
			}
			setIsPlaying(!isPlaying);
		}
	}

	return (
		<article className="music-card">
			<img className="music-card__cover" src={props.cover} alt={props.title} />
			<span className="music-card__title">{props.title}</span>
			<span className="music-card__artist">{props.artist}</span>
			<div className="music-card__play">
				<audio ref={audioRef} src={props.preview} />
				<button className="music-card__play__btn" onClick={togglePlay}>
					{isPlaying ? <Pause className="icon" /> : <Play className="icon" />}
				</button>
				<button className="music-card__play__btn">
					<CirclePlus className="icon" />
				</button>
			</div>
		</article>
	);
}
