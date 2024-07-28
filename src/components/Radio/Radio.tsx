import React, { useState } from "react";
import { Radio } from "../../services/deezerService";

export default function RadioMusic(){
    const [query, setQuery] = useState('')
    async function test(){
        if(query == ''){
            return 0
        }
        const result = await Radio(query)
        setQuery(result)
        console.log(result);
        
    }
    return (
			<>
				<input
					className="music-search__input tWhite"
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search songs, artists, album, ..."
				/>
				
			</>
		);
}