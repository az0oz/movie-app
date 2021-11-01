import React from 'react'
import { IMAGE_BASE_URL } from '../../config';
import { StyledActor } from '../styles/StyledActor';
import ImageNotFound from '../../assets/no-image.png'

export const Actor = ({picture, name, character}) => {
    const POSTER_SIZE = "w154";

    return (
        <StyledActor>
            <img  
                src={picture ? `${IMAGE_BASE_URL}${POSTER_SIZE}${picture}` : ImageNotFound}
                alt="actorThumb"
            />
            <span className="actor-name">{name}</span>
            <span className="actor-character">{character}</span>
        </StyledActor>
    )
}
