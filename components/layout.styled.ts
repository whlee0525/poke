import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-itmes: center;
  justify-content: center;
`;

export const Mirror = styled.div`
  margin: 0 auto;
  width: 80vw;
  height: 70vh;
  max-width: 500px;
  max-height: 700px;
  border: 10px solid Gray;
  border-radius: 50%;
  padding: 30px;
  background: linear-gradient(45deg, white, skyblue);

  display: flex;
  flex-direction: column;
  align-itmes: center;
  justify-content: center;
  text-align: center;

  font-size: 16px;
  font-weight: 500;

  a {
    font-size: 24px;
    font-weight: bold;
    word-break: keep-all;
  }
`;
