import styled from "styled-components";

export const HeaderInput = styled.div`
  display: flex;
  gap: 12px;

  input {
    width: 203px;
    height: 60px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    padding: 21px 16px;
    border-radius: 15px;
    background: transparent;
    border: 1px solid #f15156;
    outline: none;

    &::placeholder {
      color: #f2f2f2;
    }
  }

  button {
    width: 60px;
    min-width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #f4d35e;
    border: none;
    border-radius: 20px;
    transition: filter 0.2s;

    img {
      width: 22px;
    }

    :hover {
      filter: brightness(0.9);
    }
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  gap: 12px;

  select {
    height: 60px;
    width: 145px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    padding-left: 14px;
    border-radius: 15px;
    background: transparent;
    border: 1px solid #f15156;
    outline: none;
    background: #e44449;
    display: flex;
    align-items: center;

    &:first-child {
      width: 67px;
    }
  }
`;
