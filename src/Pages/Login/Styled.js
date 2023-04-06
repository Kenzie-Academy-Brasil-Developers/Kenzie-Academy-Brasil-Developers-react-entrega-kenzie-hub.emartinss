import styled from "styled-components";

export const StyledLogin = styled.div`
  height: 100vh;

  h1 {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    font-size: 1.375rem;
    font-weight: 700;

    color: var(--Color-primary);

    height: 100px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 95%;
    height: 70%;

    margin: 15px auto 0 auto;

    background-color: var(--grey-3);

    border-radius: 4px;

    color: var(--grey-0);

    p {
      display: flex;
      justify-content: center;

      font-size: 1.125rem;
      font-weight: 700;

      margin: 30px 0 0 0;
    }

    label {
      display: flex;
      flex-direction: column;

      font-size: 0.75rem;

      width: 95%;
      margin: 0 auto;

      span {
        font-size: 0.625rem;
        color: var(--negative);
        font-weight: 500;

        margin: 8px 0 0 0;
      }
    }

    button:first-of-type {
      background-color: var(--color-primary-Disable);

      min-height: 40px;

      padding: 0 22px;
      color: #ffffff;

      border-radius: 4px;

      width: 95%;

      :hover {
        background-color: var(--Color-primary);
        cursor: pointer;
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      min-height: 40px;

      padding: 0 22px;

      background-color: var(--grey-1);
      color: var(--grey-0);

      border-radius: 4px;

      width: 95%;

      margin: 0 0 20px 0;

      :hover {
        background-color: var(--grey-0);
        color: var(--grey-1);
        cursor: pointer;
      }
    }

    small {
      font-size: 0.6875rem;
      font-weight: 600;

      color: var(--grey-1);
    }
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    form {
      width: 420px;
      height: 60%;

      margin: 25px auto 150px auto;

      small {
        font-size: 0.75rem;
      }
    }
  }
`;
