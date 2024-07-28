import axios from 'axios';

const API_URL = 'https://deezerdevs-deezer.p.rapidapi.com/search';
export const API_KEY = '0d2d0cae83msh48ab0303948d9b2p1a7134jsn1fb08865bb5b';
export const API_HOST = 'deezerdevs-deezer.p.rapidapi.com';

export const searchMusic = async (
    query: string,
    page: number = 1,
    limit: number = 30,
) => {
    try {
        const index = (page - 1) * limit
        const response = await axios.get(API_URL, {
            params: { 
                q: query,
                index: index,
                limit: limit 
            },
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': API_HOST
            }
        });
        return response.data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};




const API_RADIO = 'https://deezerdevs-deezer.p.rapidapi.com/radio/'
export const Radio = async (
    query: string, 
) => {
    try{
        const response = await axios.get(API_RADIO,{
            params: {
                q: query,
            }, 
            headers: {
                'x-rapidapi-key':  API_KEY,
                'x-rapidapi-host': API_HOST
            }
        })
        return response.data.data
    } catch(error){
        console.error(error);
        
    }

}

const genre = ''
//const API_GENRE_KEY = "0312da96d3mshbfb763dd0359808p1a6cc3jsn11f261ccb01a"
