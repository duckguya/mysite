import styled from "styled-components";
import sample from "../assets/images/test.png";

function ProjectDetail() {
  return (
    <Container>
      <TextBox>
        <BoxWrapper>
          <ImgBox sample={sample} />
        </BoxWrapper>
        <Text>
          <h2>Netflix Clone</h2>
          <span>사용기술</span>
          <p>Javascript, React, Typescript, styled-component</p>
          <span>구현 기능</span>
          <p>1. 설명</p>
          <p>2.. 설명</p>
        </Text>
      </TextBox>
    </Container>
  );
}

const Container = styled.div`
  padding: 50px 180px 0 0;
  height: 3000px;
`;
const BoxWrapper = styled.div`
  width: 716px;
  height: 519px;
  overflow: hidden;
  position: sticky;
  align-self: flex-start;
  top: 100px;
`;
const ImgBox = styled.div<{ sample: string }>`
  background-image: url(${sample});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
`;
const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 1500px;
  background-color: beige;
`;
const Text = styled.div`
  width: 300px;
  height: 300px;
  h2 {
    font-size: 40px;
    text-align: center;
  }
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

export default ProjectDetail;
