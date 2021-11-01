import styled from 'styled-components'

export const StyledSpinner = styled.div`
  border: 5px solid white;
  border-top: 5px solid #f91416;
  border-radius: 50%;
  width: 100px;
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  animation: spin 0.7s linear infinite;
  margin: 20px auto;
  
  @keyframes spin {
      0% {
          transform: rotate(0deg);
      }

      100% {
          transform: rotate(360deg)
      }
}
`