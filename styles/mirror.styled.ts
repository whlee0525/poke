import styled from "@emotion/styled";

export const Mirror = styled.button`
  margin: 0 auto;
  width: 90vw;
  height: 80vh;
  max-width: 500px;
  max-height: 700px;
  border: 10px solid Gray;
  border-radius: 50%;
  padding: 0 50px;
  background: linear-gradient(45deg, white, skyblue);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 500;

  cursor: pointer;

  p {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    word-break: keep-all;
  }
`;
