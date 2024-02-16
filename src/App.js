import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Adicionando as importações aqui
import {
  Container,
  Menu,
  LinkedinButton,
  GithubButton,
  Cv,
  Tecnology,
  Html,
  Css,
  Js,
  Node,
  Reactt,
  CustomFaHtml5
} from "./styles";

function App() {
  return (
    <Container>
      <Menu>
        <LinkedinButton href="https://www.linkedin.com/in/geovanilobo/">
          <FaLinkedin />
        </LinkedinButton>
        <GithubButton href="https://github.com/GeovaniLobo">
          <FaGithub />
        </GithubButton>
        <Cv>DOWNLOAD CV</Cv>
      </Menu>
      <Tecnology>
        <Html>
          <CustomFaHtml5 />
        </Html>
        <Css></Css>
        <Js></Js>
        <Node></Node>
        <Reactt></Reactt>
      </Tecnology>
    </Container>
  );
}

export default App;
