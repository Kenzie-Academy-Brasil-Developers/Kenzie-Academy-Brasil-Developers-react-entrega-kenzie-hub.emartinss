import styled from "styled-components";

export const StyledDashboard = styled.div`
  div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 80px;

    border-bottom: 1px solid var(--grey-3);

    div {
      width: 95%;

      a {
        height: 32px;

        background-color: var(--grey-3);
        color: var(--grey-0);

        padding: 0 16px;

        border-radius: 4px;
      }
    }

    h1 {
      font-size: 1.375rem;
      font-weight: 700;

      color: var(--Color-primary);

      margin: 0 0 0 15px;
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

    width: 100%;

    gap: 20px;

    color: var(--grey-0);

    h2 {
      font-size: 18px;
      font-weight: 600;

      margin: 0 0 0 15px;

      max-width: 100%;
    }

    p {
      font-size: 14px;
      font-weight: 400;

      margin: 0 0 0 15px;

      color: var(--grey-1);
    }
  }

  @media (min-width: 769px) {
    width: 60%;
    margin: 0 auto;

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
    }
  }
`;
