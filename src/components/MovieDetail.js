import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchMovies from '../hooks/useFetchMovies';

const Movie = () => {
    const { id } = useParams();
    const { movies } = useFetchMovies();

    const movie = movies.find(m => m.id === parseInt(id));

    if (!movie) return <div>Movie not found</div>;

    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={movie.poster_path} alt={movie.title} />
            <p>{movie.description}</p>
        </div>
    );
};

export default Movie;
