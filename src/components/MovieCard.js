import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <Link to={`/movie/${movie.id}`}>
                <img src={movie.poster_path} alt={movie.title} />
                <h3>{movie.title}</h3>
            </Link>
        </div>
    );
};

export default MovieCard;
