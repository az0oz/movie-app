import styled from 'styled-components';

export const StyledHeroImage = styled.div`
    background: ${props =>
    `linear-gradient(
        to bottom, rgba(0, 0, 0, 0)
        39%, rgba(0, 0, 0, 0)
        41%, rgba(0, 0, 0, 0.9)
        100% 
        ),
        url('${props.image}'), #1c1c1c` 
    };
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position: center, center; */
    width: 100%;
    height: 500px;
    position: relative;
    animation: animateHeroImage 1s;

    .heroImage-content {
        max-width: 1200px;
        padding: 20px;
        margin: 0 auto;
    }

    .heroImage-text {
        z-index: 100;
        max-width: 700px;
        position: absolute;
        bottom: 40px;
        margin-right: 20px;
        min-height: 100px;
        color: #fff;

        h1 {
            //font-family: 'Abel', sans-serif;
            font-size: 40px;
            color: #fff;

            @media screen and (max-width: 720px) {
                font-size: 40px;
                color: #fff;
            }
        }

        p {
            //font-family: 'Abel', sans-serif;
            font-size: 20px;
            line-height: 25px;
            color: #fff;

            @media screen and (max-width: 720px) {
                font-size: 16px;
                line-height: 20px;
            }
        }

    @keyframes animateHeroImage {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    }

    @media screen and (max-width: 720px) {
      width: 100%;
      height: 400px;

    }

`
