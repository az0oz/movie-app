import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
    /* display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    align-content: center;
    height: auto;
    width: 200%; */

  img {
    width: 100%;
    height: 100%;
    /* max-height: 350px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 5px;

    :hover {
      opacity: 0.8;
    }


    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    }

    .clickable {
      cursor: pointer;
    }
  }
`;
