// styles.js

import styled from "styled-components";
import { FaHtml5 } from "react-icons/fa";

export const Container = styled.body`
  background-color: red;
`;

export const Menu = styled.header`
  background-color: #181818;
  height: 65px;
  padding-top: 15px;
  padding-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkedinButton = styled.a`
  font-size: 36px;
  color: #0b67c3;
  text-align: center;
  margin-left: auto;
  margin-right: 30px;
`;

export const GithubButton = styled.a`
  font-size: 36px;
  color: aliceblue;
  text-align: center;
  margin-right: 30px;
`;

export const Cv = styled.button`
  background-color: #e59416;
  width: 134px;
  height: 36px;
  border-radius: 18px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  margin-right: 32px;
`;

export const Tecnology = styled.section`
  width: 100vw;
  height: 505px;
  background: #bfbfbf;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

export const Html = styled.div`
  width: 200px;
  height: 250px;
  background: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 45px;
`;

export const CustomFaHtml5 = styled(FaHtml5)`
  color: #e34f26;
  width: 175px;
  height: 199px;
`;

export const Css = styled.div`
  width: 311,01 px;
  height: 382,01 px;
  background: #2a2a2a;
`;

export const Js = styled.div`
  width: 311,01 px;
  height: 382,01 px;
  background: #2a2a2a;
`;

export const Node = styled.div`
  width: 311,01 px;
  height: 382,01 px;
  background: #2a2a2a;
`;

export const Reactt = styled.div`
  width: 311,01 px;
  height: 382,01 px;
  background: #2a2a2a;
`;
