import React from 'react'
import { Link } from '@reach/router'
import { StyledNavigation } from '../../styles/StyledNavigation'

export const Navigation = ({ title }) => {
    return (
       <StyledNavigation>
           <div className="navigation-content">
            <Link to="/">
                <p>Home</p>
            </Link> 
            <p>|</p>
            <p>{title}</p>
           </div>
       </StyledNavigation>

    )
}
