import styled from "styled-components";
export const StyledInput = styled.input`
  height: 40px;
  

  background-color: var(--grey-2) ;

  padding: 0 13px;

  border-radius:4px;

  color: var(--grey-0);
 
  :hover{
    border: 1px solid var(--grey-0);
  }
  ::placeholder{
    color:#868E96;
    
  }
`;
