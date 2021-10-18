import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 30px auto;
  //   background: #000;
  padding: 20px;
  box-sizing: boeder-box;
  border: 1px solid #000;
  border-radius: 15px;
`;

export const Button = styled.button`
  color: #000;
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  //   color: #000;
  font-size: 20px;
  max-width: 400px;
  ${(props) => (props.active ? "color: #000" : "color: red")};
`;

export const Form = styled.form``;

export const Label = styled.span`
  color: #000;
`;

export const TextField = styled.input`
  border: 1px solid #000;
  background: transparent;
  color: #000;
  padding-left: 10px;
`;
