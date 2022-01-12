import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function Movies () {
    const [ movies, setMovies ] = useState([])

    //fetching data di pages movies
    // Hooks useEffect => fetch

    useEffect(() => {
        fetch('http://movie-app-g2.herokuapp.com/movies')
        .then(response => {
            if (!response.ok) {
                throw new Error('error');
            }

            return response.json();
        })
        .then(data => {
            console.log(data)
            setMovies(data);
        })
        .catch(err => {
            console.log(err);
        })

    }, [])


    return (
        <div className="row justify-content-center">
            <h1>Halaman Movies</h1>
            { movies.map((movie,i) => (
                <Movie movie={movie} key={i}/>
            )) }
        </div>
    )
}

export default Movies