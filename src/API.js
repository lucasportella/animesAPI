import axios from "axios";

const getAnimes = async () => {
    const { data } = await axios.get('https://api.aniapi.com/v1/anime');
    if (data.status_code === 200) {
        return data.data.documents
    }
    return 'error on fetch animes'
}

const animesList = await getAnimes();

export default getAnimes;
