import React, { useEffect, useState } from "react";
import '../style/Main.css';
import { getMovieList, searchMovie, imgUrl, watchVideos } from './api'

const Main = () => {

    const [popularMovies, setPopularMovies] = useState([])
    // const []

    useEffect(() => {
        getMovieList().then((result) => {
            setPopularMovies(result)
        })
    }, []);

    // useEffect(()=>{
    //     watchVideos().then((result)=>{
    //         setWatchVideos(result)
    //     })
    // }, [])

    const PopularMovieList = () => {
        return popularMovies.map((movie, i) => {
            return (

                <div className="card" key={i}>
                    <img src={`${imgUrl}/${movie.poster_path}`} alt="poster" id="movieImg" />
                    <div className="warpTitle">
                        <h1>{movie.title}</h1>
                        <p>{movie.release_date}</p>
                        <p>{movie.vote_average}</p>
                        <div class="w3-light-grey">
                            {/* <div class="w3-grey" style="height:24px;width:50%"></div> */}
                            <div class="w3-grey" ></div>

                        </div><br></br>
                    </div>
                </div>

            )
        })
    }

    const search = async (q) => {
        if (q.length > 3) {
            const query = await searchMovie(q)
            setPopularMovies(query.results)
        }
    }


    return (
        <div className="main">
            <input placeholder="Cari aja kalo mau :)"
                className="search"
                onChange={({ target }) => search(target.value)}
            />
            <div className="movieContainer">
                <PopularMovieList />
            </div>
        </div>
    )
}

export default Main;