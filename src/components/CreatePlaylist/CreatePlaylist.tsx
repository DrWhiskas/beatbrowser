import React, { useState } from "react";

export default function CreatePlaylist(){
    const [isOpen, setIsOpen] = useState(false)
    
    return (
			<section className="create-playlist">
				<h2 className="create-playlist__title">Create a Playlist</h2>
				<form>
					<label htmlFor="name">Name</label>
					<input className="create-playlist__input" type="text" placeholder="Name" />
				</form>
			</section>
		);
}