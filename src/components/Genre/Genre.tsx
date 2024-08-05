import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../services/deezerService";
import { API_HOST } from "../../services/deezerService";

export default function GenreMusic(){
    const [genreId, setGenreId] = useState('')

    const API_GENRE = `https://deezerdevs-deezer.p.rapidapi.com/genre/rap`;

		 const Genre = async (query: string) => {
			try {
				const response = await axios.get(API_GENRE, {
					params: {
						q: query,
					},
					headers: {
						'x-rapidapi-key': API_KEY,
						'x-rapidapi-host': API_HOST,
					},
				});
				return response.data.data;
			} catch (error) {
				console.error(error);
			}
		};
        Genre(genreId)
        console.log(genreId);
        
	return(<>
        
    </>)
	}