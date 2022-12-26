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
        <TextWrapper>
          <Header>
            <p>{data.title}</p>
            <span>{data.about}</span>
          </Header>
          <TechWrapper>
            <span>사용기술</span>
            {data.technologies.map((tech) =>
              tech === data.technologies[data.technologies.length - 1] ? (
                <p>{tech}</p>
              ) : (
                <p>{tech},</p>
              )
            )}
          </TechWrapper>
          <SkillWarpper>
            <span>구현 기능</span>
            <ul>
              {data.content.function.map((f) => (
                <li>{f}</li>
              ))}
            </ul>
          </SkillWarpper>
        </TextWrapper>
        <ScrollWrapper>
          <ImgWrapper>
            <ImgBox sample={data.images[0]} />
          </ImgWrapper>
          <Explanation>
            {data.content.explanation.map((d) => (
              <p>{d}</p>
            ))}
          </Explanation>
        </ScrollWrapper>
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
  padding-top: 50px;
  /* width: 800px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextWrapper = styled.div`
  padding-bottom: 100px;
  background-color: white;
  border-radius: 10px;
  padding: 60px;
  width: 65vw;
  margin-bottom: 30px;
`;
const Header = styled.div`
  /* display: flex; */
  align-items: baseline;
  p {
    font-size: 80px;
    font-weight: 500;
    padding-bottom: 10px;
  }
  span {
    font-size: 20px;
    padding-left: 10px;
    /* color: #86868b; */
    /* font-weight: 300; */
  }
`;

const TechWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 50px 0;
  span {
    font-size: 21px;
    padding-right: 5px;
    font-weight: 500;
  }
  p {
    font-size: 21px;
    padding-left: 5px;
    color: #86868b;
    font-weight: 500;
  }
`;

const SkillWarpper = styled.div`
  span {
    font-size: 21px;
    font-weight: 500;
  }
  ul {
    font-size: 21px;
    font-weight: 500;
    color: #86868b;
    padding-top: 10px;
  }
  li {
    list-style-position: inside;
    padding-top: 10px;
  }
`;

const ScrollWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 1000px;
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;
const ImgWrapper = styled.div`
  width: 716px;
  height: 519px;
  overflow: hidden;
  position: sticky;
  align-self: flex-start;
  top: 150px;
`;
const ImgBox = styled.div<{ sample: {} }>`
  background-image: url(${sample});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  margin-right: 30px;
`;
const Explanation = styled.div`
  white-space: pre-line;
  width: 500px;
  p {
    font-size: 21px;
    font-weight: 500;
  }
`;

export default ProjectDetail;
