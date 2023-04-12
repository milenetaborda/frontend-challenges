import styled from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={styled.container}>
      <small>Aguarde um momento, estamos buscando os emojis</small>

      <div className={styled.loader}>
        <span className={styled["loader__element"]} />
        <span className={styled["loader__element"]} />
        <span className={styled["loader__element"]} />
      </div>
    </div>
  );
};
