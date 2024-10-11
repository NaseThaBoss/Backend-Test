import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_URL = 'moviedatabase8.p.rapidapi.com'; // Replace with your API endpoint

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(API_URL);
                setMovies(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return { movies, loading };
};

export default useFetchMovies;
