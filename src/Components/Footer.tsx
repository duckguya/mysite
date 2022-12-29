import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { navState } from "../atoms";

function Footer() {
  const [state, setState] = useRecoilState(navState);

  return (
    <Container state={state}>
      <div>duckguya@gmail.com</div>
      <a href="https://github.com/duckguya" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </Container>
  );
}

const Container = styled.footer<{ state: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  /* color: ${(props) => (props.state === "/about" ? "white" : "black")}; */
  color: black;
  transform: translateY(-100%);
  font-size: 13px;
  /* margin-top: 50px; */
  div {
    padding-right: 5px;
    font-weight: 400;
    letter-spacing: 1px;
  }
`;

export default Footer;
