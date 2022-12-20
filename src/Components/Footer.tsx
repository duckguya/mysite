import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <div>duckguya@gmail.com</div>
      <div>github</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  color: ${(props) => props.theme.pointColor};
`;

export default Footer;
