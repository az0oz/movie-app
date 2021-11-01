import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { SEARCH_BASE_URL, POPULAR_BASE_URL, IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';
import ImageNotFound from '../assets/no-image.png';
import Grid from '../components/UI/Grid/Grid';
import SearchBar  from '../components/UI/SearchBar/SearchBar';
import { LoadMoreBtn } from '../components/UI/LoadMoreBtn.js/LoadMoreBtn';
import { Spinner } from '../components/UI/Spinner/Spinner';
import MovieThumb  from '../components/Movies/MovieThumb/MovieThumb';
import { HeroImage } from '../components/Movies/HeroImage/HeroImage';
import { StyledNoResultsFound } from '../components/styles/StyledNoResultsFound';
const Home = () => {
    const [movies, setMovies] = useState({
        moviesList: []
    })
    const [heroImage, setHeroImage] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState('')

    const fetchMovies = useCallback(async (endPoint) => {
        setLoading(true);
        setError(false);
        try {
            const isLoadMore = endPoint.search('page');
            const result = await axios.get(endPoint);
            if (isLoadMore !== -1) {
                setMovies( prev => {
                    return {
                        ...prev,
                        moviesList: [...prev.moviesList, ...result.data.results]
                    }
                })
                setHeroImage(result.data.results[0]);
                setCurrentPage(result.data.page);
                setLoading(false)
            }
            else {
                setMovies( prev => {
                    return {
                        ...prev,
                        moviesList: [...result.data.results]
                    }
                })
               
                setHeroImage(result.data.results[0]);
                setCurrentPage(result.data.page);
                setLoading(false)
            }

        } catch (error) {
            setError(error)
            setLoading(false)
        }


    }, [setMovies])

    useEffect(() => {
            if( localStorage.getItem('MoviesList')) {
                const persistedMovies = JSON.parse(localStorage.getItem('MoviesList'));
                const persistedHeroImage = JSON.parse(localStorage.getItem('HeroImage'));
                setHeroImage(persistedHeroImage)
                setMovies( prev => {
                    return {
                        ...prev,
                        moviesList: [...persistedMovies.moviesList]
                    }
                }) 
                if(searchTerm){
                    const persistedSearchTerm = JSON.parse(localStorage.getItem('SearchTerm'));
                    setSearchTerm(persistedSearchTerm)
                }
            } else {
                fetchMovies(`${POPULAR_BASE_URL}`);
            }
    }, [])

    useEffect(() => {
        if(movies.moviesList.length > 0) {
            localStorage.setItem('MoviesList', JSON.stringify(movies))
        }
        if(heroImage) {
            localStorage.setItem('HeroImage', JSON.stringify(heroImage))
        }
        if(searchTerm !== '') {
            localStorage.setItem('SearchTerm', JSON.stringify(searchTerm))
        }
    }, [fetchMovies, movies, heroImage, searchTerm])

    const searchMovies = useCallback((search) => {
        const endPoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;
        setSearchTerm(search)
        fetchMovies(endPoint)
    }, [setSearchTerm, fetchMovies])

    const loadMoreMovies = () => {
        const searchEndPoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
        const popularEndPoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;
        const endPoint = searchTerm ? searchEndPoint : popularEndPoint;
        fetchMovies(endPoint)
    }

    let errorMsg = null;
    let heroImageContent = null;
    let moviesContent = null;
    let gridMoviesContent = null;
    let moviesListContent = null;
    let loadMoreButton = null
    let resultsNotFound = (
        <StyledNoResultsFound>
            Not Results Found
        </StyledNoResultsFound>
    )
    heroImageContent = (
        heroImage ?
        <HeroImage 
            image={
                `${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`
            }
            title={heroImage.original_title}    
            text={heroImage.overview}    
        /> 
        :
        <HeroImage />
    );

    moviesContent = movies.moviesList.map( (movie, index) => 
        <MovieThumb 
            key={index}
            clickable
            image={
                movie.poster_path 
                ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.poster_path}`
                : ImageNotFound
            }
            movieId={movie.id}
            movieName={movie.original_title}

        />
    )

    gridMoviesContent =  ( <Grid 
                                header={searchTerm ? 
                                'Search Result' 
                                : 'Popular Movies'}
                                >
                                {moviesContent}
                            </Grid> )

    moviesListContent = ( moviesContent.length === 0 && !loading 
                            ? resultsNotFound 
                            : gridMoviesContent 
                        )

    if(loading) {
        loadMoreButton = <Spinner />
    } else if (moviesContent.length !== 0 && !loading) {
        loadMoreButton = <LoadMoreBtn clicked={loadMoreMovies}/>
    } else {
        loadMoreButton = null;
    }

    if ( error ) {
        errorMsg = error;
    }

    return (
        <React.Fragment>
            {heroImageContent}
            <SearchBar callback={searchMovies}/>
            {errorMsg}
            {moviesListContent}
            {loadMoreButton}
        </React.Fragment>
    )
}

export default Home;
