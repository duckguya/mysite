import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <div>duckguya@gmail.com</div>
      <a href="https://github.com/duckguya" target="_blank">
        <FontAwesomeIcon icon={faGithub} color="#ca1e20" size="2x" />
      </a>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  color: ${(props) => props.theme.pointColor};
  transform: translateY(-100%);
  font-size: 13px;
  div {
    padding: 10px;
    font-weight: 400;
    letter-spacing: 3px;
  }
`;

export default Footer;
