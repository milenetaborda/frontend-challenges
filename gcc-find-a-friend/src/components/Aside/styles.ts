import styled from "styled-components";

export const Container = styled.aside`
  width: 392px;
  height: 100vh;
  background-color: #f15156;
`;

export const AsideHeader = styled.div`
  height: 241px;
  background-color: #e44449;

  img {
    width: 45px;
  }

  & > div {
    padding: 81px 56px 26px;
    display: flex;
    flex-direction: column;
    gap: 26px;
  }
`;

export const AsideContent = styled.div`
  height: calc(100vh - 241px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 35px 56px;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #f15156;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fbe1e2;
    border-radius: 20px;
    border: 3px solid #f15156;
  }
`;

export const ContentHeader = styled.h1`
  font-size: 20px;
  line-height: 34px;
  margin-bottom: 27px;
`;

export const ContentFilters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
