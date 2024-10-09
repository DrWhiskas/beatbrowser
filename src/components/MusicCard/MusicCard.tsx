import React, { useRef } from 'react';
import './musicCard.css';
import { Play, Pause } from 'lucide-react';

// Define the props interface to type-check the component's props

interface MusicCardProps {
	title?: string;
	artist?: string;
	album?: string;
	cover?: string;
	preview?: string;
	music?: string;
	isPlaying: boolean;
	onTogglePlay: () => void;
}

// Functional component
export default function MusicCard({ ...props }: MusicCardProps) {
	// useRef hook to reference the audio element
	const audioRef = useRef<HTMLAudioElement | null>(null);

	return (
		<article className="music-card">
			<img className="music-card__cover" src={props.cover} alt={props.title} />
			<span className="music-card__title">{props.title}</span>
			<span className="music-card__artist">{props.artist}</span>
			<div className="music-card__play">
				<audio ref={audioRef} src={props.preview} />
				<button className="music-card__play__btn" onClick={props.onTogglePlay}>
					{props.isPlaying ? (
						<Pause className="icon" />
					) : (
						<Play className="icon" />
					)}
				</button>
			</div>
		</article>
	);
}
