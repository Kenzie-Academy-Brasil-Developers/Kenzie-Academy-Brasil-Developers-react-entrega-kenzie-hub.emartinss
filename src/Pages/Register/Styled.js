import styled from "styled-components";

export const StyledRegister = styled.div`
  width: 100%;

  background-color: var(--grey-4);
  color: white;

  margin: 70px 0 0 0;

  div {
    display: flex;
    justify-content: space-between;

    margin: 10px 25px 8px 17px;

    h1 {
      font-size: 1.375rem;
      font-weight: 600;

      color: var(--Color-primary);
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 32px;

      background-color: var(--grey-3);
      color: var(--grey-0);

      padding: 0 16px;

      border-radius: 4px;
    }
  }

  form {
    background-color: var(--grey-3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 95%;
    width: 90%;

    margin: 50px auto 0 auto;
    padding: 34px 18px;
    gap: 15px;

    border-radius: 4px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 18px;

      p {
        font-size: 1rem;
        font-weight: 700;
      }

      span {
        font-size: 0.75rem;
        font-weight: 400;

        color: var(--grey-1);
      }
    }

    button {
      background-color: var(--color-primary-Disable);

      min-height: 40px;

      padding: 0 22px;
      color: #ffffff;

      border-radius: 4px;

      :hover {
        background-color: var(--Color-primary);
        cursor: pointer;
      }
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
  }

  label {
    display: flex;
    flex-direction: column;

    font-size: 0.75rem;

    color: var(--grey-0);

    p {
      font-size: 0.625rem;
      color: var(--negative);
      font-weight: 500;
    }
  }

  @media (min-width: 769px) {
    form {
      width: 380px;
    }

    div {
      max-width: 100%;

      display: flex;
      justify-content: center;

      h1 {
        margin-right: 180px;
      }
    }
  }
`;
