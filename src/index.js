import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

// import "./index.css";
import "./index.scss";
import { Button } from "./components/WhoAmI/WhoAmIStyled";
import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BigButton as="a">js</BigButton>
  </React.StrictMode>,
  document.getElementById("root")
);
