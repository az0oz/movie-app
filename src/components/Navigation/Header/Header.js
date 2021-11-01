import React from 'react'
import Logo from '../../../assets/Logo.png';
import TMDBLogo from '../../../assets/tmdb_logo.svg';
import { StyledHeader, StyledLogo, StyledTMDBLogo } from '../../styles/StyledHeader';
import { Link } from '@reach/router'


export const Header = () => {
    return (
        <StyledHeader>
            <div className="header-content">
                <Link to="/">
                    <StyledLogo src={Logo} alt="Main logo"/>
                </Link>
                <StyledTMDBLogo src={TMDBLogo} alt="TMDB logo"/>
            </div>
        </StyledHeader>
    )
}
