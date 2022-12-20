import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isVisibleState } from "../atoms";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  box-shadow: 5px 5px 5px 5px #dcdcdc;
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.backColor};
  z-index: 99;
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
  const [isVisible, setIsVisible] = useRecoilState(isVisibleState);

  const onClicked = () => {
    setIsVisible(true);
  };

  return (
    <Nav>
      <Link to={"/"}>
        <Tap>Home</Tap>
      </Link>
      <Link to={"/project"}>
        <Tap onClick={onClicked}>Project</Tap>
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
