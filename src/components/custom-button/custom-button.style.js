import styled, { css } from "styled-components";

const basicButtonStyle = css`
  background-color: #626767;
  border-radius: 0.3rem;
  color: white;
  border: none;
  &:hover {
    background-color: #c0c3c3;
    color: black;
  }
`;

const googleSignInStyle = css`
  background-color: #4285f4;
  color: white;
  border-radius: 0.3rem;
  border-color: none
  &:hover {
    background-color: white;
    border: none;
  }
`;

const invertedStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const getButtonStyle = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyle;
  }
  return props.inverted ? invertedStyle : basicButtonStyle;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  margin-right: 0.5rem;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Noto Sans", sans-serif;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyle}
`;
