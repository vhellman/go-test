import React, { useParams, useState, useEffect }  from 'react'

const Movie = ({ match: { params } }) => {
    

    const [movie, setMovie] = useState({});

    useEffect(() => {
        setMovie({
            id: params.id,
            title: "Some damn movie",
            runtime: 150
        })
    }) 

    return (
        <>
            <h2>Movie id: {movie.title} {movie.id}</h2>   
            <table className="table table-compact table-striped">
                <thead></thead>
                <tbody>
                    <tr>
                        <td><strong>Title:</strong></td>
                        <td>{movie.title} </td>
                    </tr>

                    <tr>
                        <td><strong>Runtime:</strong></td>
                        <td>{movie.runtime} minutes</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Movie
