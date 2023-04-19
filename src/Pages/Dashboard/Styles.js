import styled from "styled-components";

export const StyledDashboard = styled.div`
  div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 80px;

    div {
      width: 95%;

      border-bottom: 1px solid var(--grey-3);

      a {
        height: 32px;

        background-color: var(--grey-3);
        color: var(--grey-0);

        padding: 0 16px;

        border-radius: 4px;
      }

      h1 {
        font-size: 1.375rem;
        font-weight: 700;

        color: var(--Color-primary);

        margin: 0 0 0 15px;
      }
    }
  }

  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;

    height: 130px;

    gap: 15px;

    margin: 40px 0 35px 0;

    border-bottom: 1px solid var(--grey-3);

    h2 {
      color: var(--grey-0);

      font-size: 18px;
      font-weight: 700;

      margin: 0 0 0 15px;
    }

    p {
      color: var(--grey-1);

      font-size: 13px;
      font-weight: 600;

      margin: 0 0 0 15px;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 95%;

    gap: 20px;
    margin: 0 auto;

    color: var(--grey-0);

    div {
      button {
        width: 32px;
        height: 32px;

        font-size: 22px;

        background-color: var(--grey-3);
        color: #ffffff;

        border-radius: 4px;

        cursor: pointer;
      }
    }

    div {
      padding: 0 10px;
    }

    h2 {
      font-size: 18px;
      font-weight: 600;
    }

    ul {
      width: 100%;
      height: 450px;
      background-color: var(--grey-3);

      padding: 0 0 15px 0;

      border-radius: 4px;

      overflow-y: auto;

      h2 {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 100%;
      }

      ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color:#212529;
  }

  ::-webkit-scrollbar-thumb {
    background-color:var(--grey-1);
  }
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 95%;
      height: 50px;

      margin: 15px auto 0 auto;
      padding: 0 25px 0 25px;

      background-color: var(--grey-4);

      border-radius: 4px;
      :hover {
        cursor: pointer;
        background-color: #343b41;
      }


      p {
        font-size: 1rem;
        font-weight: 700;

        color: #ffffff;
      }

      span {
        color: var(--grey-1);
      }
    }

  }

  @media (min-width: 769px) {
    width: 60%;
    margin: 0 auto;

    .divNav{
      div:first-of-type{
      width: 100%;
    }
    }

    div:first-of-type {
      justify-content: space-between;
      align-items: center;
      
      
    }

    div:nth-of-type(2) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

    }

    main {
      align-content: space-between;
      flex-wrap: wrap;

      width: 100%;
    }
  }
`;

export const StyledModal = styled.dialog`
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

    button:first-of-type {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: var(--color-primary-Disable);

      font-size: 16px;
      font-weight: 500;

      height: 40px;

      padding: 8px 22px;
      color: #ffffff;

      border-radius: 4px;

      margin-bottom: 25px;

      :hover {
        background-color: var(--Color-primary);
        cursor: pointer;
      }
    }
  }
  @media (min-width: 769px) {
    width: 23.0625rem;
    height: 21.375rem;
  }
`;
