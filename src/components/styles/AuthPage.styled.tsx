import styled from "styled-components";

export const StyledAuthPage = styled.div`
  width: 100%;
  min-height: calc(100vh - 56px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAuth = styled.div`
  background-color: rgba(117, 117, 117, 0.2);
  min-width: 340px;
  padding: 30px 40px 50px 40px;

  h2 {
    margin-top: 0;
    margin-bottom: 50px;
  }
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  font-size: 18px;
  flex: 1;
  outline: none;
`;

export const StyledEmail = styled.div`
  position: relative;
  padding: 18px 20px;
  background-color: white;
  display: flex;
  border-radius: 5px;
  span {
    position: absolute;
    pointer-events: none;
    font-size: 18px;
    font-weight: bold;
    opacity: 0.6;
    top: 50%;
    transform: translateY(-50%);
    transition: all 50ms ease-in;
  }

  & + & {
    margin-top: 30px;
  }

  &:focus-within {
    box-shadow: 0 0 0 2px black;
    span {
      opacity: 1;
    }
  }
`;

export const StyledPasswordInput = styled(StyledEmail)`
  button {
    background-color: transparent;
    border: none;
    padding: 0;
    line-height: 0;
    font-size: 24px;
    cursor: pointer;
  }
`;

export const StyledSubmit = styled.button`
  background-color: #3f5e5a;
  border: none;
  color: white;
  width: 100%;
  font-size: 16px;
  padding: 10px;
  border-radius: 30px;
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const StyledRegisterText = styled.p`
  text-align: center;

  a {
    color: #0cb508;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const StyledGoogleDiv = styled.div`
  p {
    text-align: center;
    font-size: 18px;
    margin-top: 60px;
  }
`;
export const StyledGoogleButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  padding: 14px 0;
  width: 100%;
  border: none;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    display: inline-block;
    margin-right: 10px;
    line-height: 0;
    font-size: 30px;
  }

  &:hover {
    box-shadow: 0 0 0 2px #373f47;
  }
`;
