import styled from "styled-components";

export const Container = styled.div`
  background: #f15156;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 72px));
  justify-content: center;
  align-content: space-evenly;
  align-items: center;
  height: 100vh;
  gap: 1.5rem;

  article {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    grid-column: 1 / 13;

    h1 {
      font-weight: 800;
      font-size: 72px;
      line-height: 90%;
      letter-spacing: -0.02em;
      max-width: 487px;
    }

    h2 {
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;
      width: 407px;
    }

    p {
      font-size: 16px;
      line-height: 34px;
      margin-right: 23px;
    }

    > div {
      display: flex;
      align-items: center;
    }
  }
`;
