import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { navState } from "../atoms";
import profile from "../assets/images/profile.png";

function Home() {
  const [state, setState] = useRecoilState(navState);

  const onClicked = (name: string) => {
    setState(name);
  };

  return (
    <Container>
      <Title>I'm Sujin</Title>
      <Content>Welcome to my page</Content>
      <LinkWrapper>
        <Link to={"/project"} onClick={() => onClicked("/project")}>
          <p>project &gt;</p>
        </Link>
        <Link to={"/about"} onClick={() => onClicked("/about")}>
          <p>about &gt;</p>
        </Link>
      </LinkWrapper>
      <Profile src={profile} title="I'm Sujin!" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 80px 30px 0 30px;
`;
const Title = styled.nav`
  font-size: 150px;
  font-weight: 700;
  padding-bottom: 20px;
  /* text-shadow: 2px 2px 2px ${(props) => props.theme.mainColor}; */
`;
const Content = styled.nav`
  font-size: 24px;
  font-weight: 400;
  padding: 5px 0;
`;
const LinkWrapper = styled.div`
  display: flex;
  p {
    color: ${(props) => props.theme.mainColor};
    padding: 10px 10px 0 10px;
    font-size: 21px;
    font-weight: 400;
  }
`;
const Profile = styled.img`
  margin-bottom: 100px;
`;
export default Home;
