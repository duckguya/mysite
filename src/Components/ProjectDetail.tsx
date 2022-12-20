import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  height: 3000px;
`;

const ImgBox = styled.div`
  position: sticky;
  align-self: flex-start;

  top: 100px;
`;
const Text = styled.div`
  width: 300px;
  height: 300px;
  background-color: aqua;
  position: sticky;
`;

function ProjectDetail() {
  return (
    <Container>
      <ImgBox>이미지자리</ImgBox>
      <Text>
        <p>
          나랏말싸미 듕귁에 달아 문자와를 서로 사맛디 아니할쎄 이런 전차로
          어린백성이 니르고저 할빼이셔도 마참내 제 뜻을 능히펴지 못할놈이
          하니다. 내이를 어여삐 녀겨 새로 스물여덟자를 맹가노니 사람마다
          수비니겨 날로쓰매 편아케 하고저 할 따라미니라.
        </p>
      </Text>
    </Container>
  );
}
export default ProjectDetail;
