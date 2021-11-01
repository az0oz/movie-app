import React from 'react'
import PropTypes from 'prop-types';
import { StyledMovieThumb } from '../../styles/StyledMovieThumb'
import { Link } from '@reach/router'

const MovieThumb = ({ image, movieId, clickable }) => {
    if (clickable) {
        return ( 
        <StyledMovieThumb>
             <Link to={`/${movieId}`}>
                <img 
                    src={image} 
                    alt={movieId}
                />
            </Link>
        </StyledMovieThumb>
        )
    }
    else {
        return (
            <StyledMovieThumb>
                    <img 
                        src={image} 
                        alt={movieId}
                    />
            </StyledMovieThumb>
        )
    }
}

MovieThumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
}

export default MovieThumb;

