import React from 'react';
import MovieList from '../components/MovieList';
import useFetchMovies from '../hooks/useFetchMovies';

const Home = () => {
    const { movies, loading } = useFetchMovies();

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2>Trending Movies</h2>
            <MovieList movies={movies} />
        </div>
    );
};

export default Home;
