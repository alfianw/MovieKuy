import axios from "axios";

const apiKey = "00d13760ae86ed8ca9335bdbc42a8f01";
const baseUrl = "https://api.themoviedb.org/3";
export const imgUrl = 'https://image.tmdb.org/t/p/w500'
// const apiKey = process.env.REACT_APP_APIKEY;
// export const imgUrl = process.env.REACT_APP_BASEIMGURL;
// const baseUrl = process.env.REACT_APP_BASEURL;


export const getMovieList = async()=>{
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    console.log({movieList: movie})
    return movie.data.results
}

// export const getMovieList = ()=>{
//     axios.get('https://api.themoviedb.org/3/movie/popular?api_key=00d13760ae86ed8ca9335bdbc42a8f01')
//     .then((data)=>console.log(data.data))
//     .catch((error)=>console.log("Error " + error))
// }

export const searchMovie = async(q) =>{
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`);
    return search.data
}

export const watchVideos = async(id)=>{
    const video = await axios.get(`${baseUrl}/movie/${id}/videos?api_key=${apiKey}`)
    console.log({videos: video})
}