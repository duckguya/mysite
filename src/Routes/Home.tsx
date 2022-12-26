import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Title>I'm Sujin</Title>
      <Content>Welcome to my page</Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 80px 30px;
  height: 100vh;
`;
const Title = styled.nav`
  font-size: 150px;
  text-shadow: 2px 2px 2px ${(props) => props.theme.mainColor};
`;
const Content = styled.nav`
  font-size: 20px;
  color: #545454;
`;
export default Home;
