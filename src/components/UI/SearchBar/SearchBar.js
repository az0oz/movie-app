import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { StyledSearchBar, StyledSearchBarContent } from '../../styles/StyledSearchBar'

const SearchBar = React.memo( props => {
    const [focused, setFocused] = React.useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const searchRef = useRef(null);
    const { callback } = props;
    const onFocus = () => setFocused(true)

    useEffect(() => {
        const searchMovie = setTimeout(() => {
            if (searchRef.current.value === searchTerm && focused) {
                callback(searchTerm);
            } 
        }, 300)
        return () => {
            clearTimeout(searchMovie)
        }
    }, [searchTerm, callback, searchRef, focused])

    

    return (
        <StyledSearchBar>
            <StyledSearchBarContent>
                <FontAwesomeIcon icon={faSearch} size="lg" />
                <input 
                    type="text"
                    placeholder="Search Movie"
                    onChange={(event) => setSearchTerm(event.target.value)}
                    value={searchTerm}
                    onFocus={onFocus}
                    ref={searchRef}
                />
            </StyledSearchBarContent>
        </StyledSearchBar>
    )
})

export default SearchBar;
