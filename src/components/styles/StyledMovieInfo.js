import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const StyledMovieInfo = styled.div`
  background: ${props =>
    props.backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
      : '#000'};
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  animation: animateMovieinfo 1s;

  .movieInfo-content {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    max-height: 550px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 20px;    
    position: relative;

    @media screen and (max-width: 768px) {
      max-width: 100%;
      max-height: 100%;
      flex-direction: column;
    }
  }

  .movieInfo-thumb {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    align-content: flex-start;
/*     height: 600px;
 */    width: 100%;
    float: left;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      width: 100% !important;
    }
  }

  .movieInfo-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //font-family: Arial, Helvetica, sans-serif;
    padding: 50px;
    color: #fff;
    overflow: hidden;

    h1 {
      //font-family: 'Abel', sans-serif;
      font-size: 48px;
      margin: 0;

      @media screen and (max-width: 1000px) {
        font-size: 32px !important;
      }
    }

    h3 {
      font-size: 16px;
      line-height: 0;
      margin-top: 30px;
    }

    p {
      //font-family: 'Abel', sans-serif;
      font-size: 18px;
      line-height: 26px;
    }
  }

  .rating-director {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .icon {
    display: flex;
    justify-content: flex-end;
  }

  .score-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 70px;
    font-size: medium;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 30px;
    margin: 0px 0 0 0;
  }

  .rating {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .director {
    margin: 5px 0 0px 0px;

    p {
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;
  }

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
