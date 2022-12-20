import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  box-shadow: 5px 5px 5px 5px #dcdcdc;
`;
const Tap = styled.div`
  margin: 15px 5px;
  color: ${(props) => props.theme.mainColor};
  padding: 10px;
  &:hover {
    color: ${(props) => props.theme.pointColor};
  }
`;

function Header() {
  return (
    <Nav>
      <Link to={"/"}>
        <Tap>Home</Tap>
      </Link>
      <Link to={"/project"}>
        <Tap>Project</Tap>
      </Link>
      <Link to={"/about"}>
        <Tap>About</Tap>
      </Link>
      <Link to={"/resume"}>
        <Tap>Resume</Tap>
      </Link>
    </Nav>
  );
}

export default Header;
