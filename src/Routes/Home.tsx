import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
`;
const Title = styled.nav`
  font-size: 150px;
  text-shadow: 2px 2px 2px ${(props) => props.theme.mainColor};
`;
const Content = styled.nav`
  font-size: 20px;
  color: #545454;
`;

function Home() {
  return (
    <Container>
      <Title>I'm Sujin</Title>
      <Content>Welcome to my page</Content>
    </Container>
  );
}

export default Home;
