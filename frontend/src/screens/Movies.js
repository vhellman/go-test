import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Movies = () => {

    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        setMovies([
            { 
                id: 1,
                title: "The Shawshank Redemption",
                runtime: 142,
            },
            { 
                id: 2,
                title: "The Matrix",
                runtime: 124,
            },
            { 
                id: 3,
                title: "Independence Day",
                runtime: 242,
            }
        ])
    }, [])

    return (
        <>
            <h2>Movies</h2>

            <ul>{ 
                movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} >{movie.title}</Link>
                    </li>
                ))
            }</ul>
        </>
      )
}

export default Movies
