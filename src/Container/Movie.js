import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from '../config';
import { Actor } from '../components/Actor/Actor';
import { MovieInfo } from '../components/Movies/MovieInfo/MovieInfo';
import { MovieInfoBar } from '../components/Movies/MovieInfoBar/MovieInfoBar';
import { Navigation } from '../components/Navigation/Navigation/Navigation';
import Grid from '../components/UI/Grid/Grid';
import { Spinner } from '../components/UI/Spinner/Spinner';
import { StyledNoResultsFound } from '../components/styles/StyledNoResultsFound';

const Movie = ({ movieId }) => {
    const [movieInfo, setMovieInfo] = useState({})
    const [actors, setActors] = useState([]);
    const [directors, setDirectors] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchData = useCallback(async () => {
        setError(false);
        setLoading(true);

        try {
            const endPoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
            const result = await axios.get(endPoint);
            
            const creditsEndPoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
            const creditsResult = await axios.get(creditsEndPoint);
            const directors = creditsResult.data.crew.filter( member => member.job === 'Director' )
            
            setMovieInfo({
                ...result.data
            })

            setActors(creditsResult.data.cast)

            setDirectors(directors)
            
        } catch (error) {
            setError(true);    
        }
        setLoading(false);

    }, [movieId])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    if ( error ) {
        return ( 
            <StyledNoResultsFound>
                Something went wrong, please try again
            </StyledNoResultsFound>
        )
    }

    const movieContent = ( movieInfo ? 
            ( <div>
                <Navigation title={movieInfo.original_title} />
                <MovieInfo title={movieInfo.original_title} plot={movieInfo.overview} rating={movieInfo.vote_average} directors={directors} actors={actors} backdrop={movieInfo.backdrop_path} poster={movieInfo.poster_path}/>
                <MovieInfoBar runtime={movieInfo.runtime} budget={movieInfo.budget} revenue={movieInfo.revenue}/>
            </div> )
        :  null )

    const actorsContent = ( actors ? 
            actors.map((actor, index) => {
            return (
                <Actor key={index} picture={actor.profile_path} name={actor.name} character={actor.character}/>
            )  
        }) : null
    )

    return (
        <React.Fragment>
            { loading ? 
                <Spinner /> :
                (
                <React.Fragment>
                {movieContent}
                <Grid>
                    {actorsContent}
                </Grid>
                </React.Fragment>
                
            )}
        </React.Fragment>
    )
}

export default React.memo(Movie)