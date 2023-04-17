import styled from "styled-components";

export const StyledModalEdit = styled.dialog`
  width: 90%;

  background-color: var(--grey-3);

  margin: 0 auto;

  border-radius: 4px;
  border: 1px solid var(--grey-2);

  div {
    display: flex;

    background-color: var(--grey-2);
    color: var(--grey-0);

    padding: 0 16px;
    margin-bottom: 40px;

    max-height: 40px;
    width: 100%;

    border-radius: 4px 0 0 0;

    p {
      font-size: 0.8125rem;
      font-weight: 700;
    }
    button {
      background-color: transparent;
      color: var(--grey-1);

      cursor: pointer;
    }
  }

  form {
    position: relative;
    display: flex;
    flex-direction: column;

    width: 100%;
    margin: 0 auto;
    padding: 0 12px;
    gap: 30px;

    label {
      display: flex;
      flex-direction: column;

      color: var(--grey-0);

      font-size: 0.75rem;
      font-weight: 400;
    }

    select {
      height: 40px;

      background-color: var(--grey-2);

      padding: 0 13px;

      border-radius: 4px;
      border: none;

      color: #868e96;

      option {
        background-color: var(--grey-1);
        color: var(--grey-0);
      }
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: var(--color-primary-Disable);

      font-size: 16px;
      font-weight: 500;

      height: 40px;
      width: 60%;

      padding: 8px 22px;
      margin-bottom: 25px;

      color: #ffffff;

      border-radius: 4px;

      :hover {
        background-color: var(--Color-primary);
        cursor: pointer;
      }
    }
  }
  .btnDelete {
    position: absolute;
    right: 1.25rem;
    bottom: 0;

    width: 30%;
    height: 40px;

    padding: 0 22px;
    margin-bottom: 25px;

    background-color: var(--grey-2);
    color: #ffffff;

    border-radius: 4px;

    :hover {
      background-color: var(--grey-1);
      cursor: pointer;
    }
  }

  @media(min-width: 769px){
    width: 23.0625rem;
    

    
  }
`;
