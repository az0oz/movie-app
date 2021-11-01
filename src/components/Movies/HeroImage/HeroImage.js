import React from 'react'
import { StyledHeroImage } from '../../styles/StyledHeroImage'

export const HeroImage = ({ image, title, text }) => {
    return (
        <StyledHeroImage image={image}>
            <div className="heroImage-content">
                <div className="heroImage-text">
                    <h1>{ title }</h1>
                    <p>{ text }</p>
                </div>
            </div>
        </StyledHeroImage>
    )
}
