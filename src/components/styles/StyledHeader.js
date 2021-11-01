import styled from 'styled-components';

export const StyledHeader = styled.div`
    background: #1c1c1c;
    padding: 0 20px;
    box-sizing: border-box;

    .header-content { 
        max-width: 1000px;
        min-height: 100px;
        padding: 20px 0;
        margin: 0 auto; 

        @media screen and (max-width: 500px) {
            min-height: 50px;
        }
    }
`;

export const StyledLogo = styled.img`
    width: 120px;
    box-sizing: border-box;
    float: left;

    @media screen and (max-width: 500px){
        width: 65px;
    }
`;

export const StyledTMDBLogo = styled.img`
    width: 120px;
    margin-top: 35px;
    float: right;

    @media screen and (max-width: 500px){
        width: 100px;
        margin-top: 10px; 
    }
`;