import React from 'react'
import { StyledLoadMoreBtn } from '../../styles/StyledLoadMoreBtn'

export const LoadMoreBtn = ({ clicked }) => {
    return (
        <StyledLoadMoreBtn onClick={clicked}>
            Load More
        </StyledLoadMoreBtn>
    )
}
