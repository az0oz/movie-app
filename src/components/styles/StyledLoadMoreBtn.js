import styled from 'styled-components';

export const StyledLoadMoreBtn = styled.button`
  background: #000;
  width: 20%;
  min-width: 100px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 40px;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  max-width: 1280px;
  display: block;
  margin: 20px auto;
  padding: 0 20px;
  outline: none;

  :hover {
    opacity: 0.8;
  }
`;
