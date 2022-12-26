import { useMatch } from "react-router-dom";
import styled from "styled-components";
import sample from "../assets/images/test.png";
import {
  IGetPortfolioDetail,
  PortfolioContent,
} from "../utils/PortfolioContent";

interface IProps {
  data?: IGetPortfolioDetail;
}

function ProjectDetail() {
  const detailMatch = useMatch("/project/:projectId");

  const datas = PortfolioContent;
  const id = Number(detailMatch?.params.projectId);
  const data = datas[id];

  return (
    <Container>
      <ContentWrapper>
        <TextBox>
          <BoxWrapper>
            <ImgBox sample={data.images[0]} />
          </BoxWrapper>
          <Text>
            <h2>{data.title}</h2>
            {data.about}
            <span>사용기술</span>
            {data.technologies.map((tech) => (
              <p>{tech}</p>
            ))}
            <span>구현 기능</span>
            <ol>
              {data.content.function.map((f) => (
                <li>{f}</li>
              ))}
            </ol>
            {data.content.explanation.map((d) => (
              <p>{d}</p>
            ))}
          </Text>
        </TextBox>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 100px 0;
  /* padding: 50px 180px 0 0; */
  /* height: 3000px;  */
`;
const ContentWrapper = styled.div`
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
const ImgBox = styled.div<{ sample: {} }>`
  background-image: url(${sample});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  margin-right: 30px;
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
  p {
    white-space: pre-line;
  }
`;

export default ProjectDetail;
