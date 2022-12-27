import { useMatch } from "react-router-dom";
import styled from "styled-components";
// import sample from "../assets/images/net.gif";
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
            <a href={data.link} title={"잘부탁드립니다!"} target="_blank">
              Demo &gt;
            </a>
            <Title>{data.title}</Title>
            <span>{data.about}</span>
          </Header>
          <TechWrapper>
            <span>사용기술</span>
            {data.technologies.map((tech, index) =>
              tech === data.technologies[data.technologies.length - 1] ? (
                <p key={index}>{tech}</p>
              ) : (
                <p>{tech},</p>
              )
            )}
          </TechWrapper>
          <SkillWarpper>
            <span>구현 기능</span>
            {/* <ul>
              {data.content.function.map((f, index) => (
                <li key={index}>{f}</li>
              ))}
            </ul> */}
            <ul>
              {data.function.map((f, index) => (
                <li key={index}>{f}</li>
              ))}
            </ul>
          </SkillWarpper>
        </TextWrapper>

        {/* <ScrollWrapper> */}
        {data.contents.map((content, index) => (
          <ScrollWrapper>
            <ImgWrapper>
              <ImgBox key={index} image={content.image} />
            </ImgWrapper>
            <Explanation>
              {/* <div /> */}
              <p>{content.text}</p>
              <div />
            </Explanation>
          </ScrollWrapper>
        ))}
        {/* </ScrollWrapper> */}

        {/* <ScrollWrapper>
          <ImgWrapper>
            {data.images.map((d, index) => (
              <ImgBox key={index} sample={d} />
            ))}
          </ImgWrapper>
          <Explanation>
            <div></div>
            {data.content.explanation.map((d, index) => (
              <p key={index}>{d}</p>
            ))}
          </Explanation>
        </ScrollWrapper> */}
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 100px 0;
  /* padding: 50px 180px 0 0; */
  /* height: 3000px;  */
  font-size: 21px;
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`;
const Title = styled.div`
  font-size: 80px;
  font-weight: 500;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;
const ContentWrapper = styled.div`
  padding-top: 50px;
  /* width: 800px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 3000px; */
`;

const TextWrapper = styled.div`
  padding-bottom: 100px;
  background-color: white;
  border-radius: 10px;
  padding: 60px;
  width: 65vw;
  margin-bottom: 100px;
`;
const Header = styled.div`
  /* display: flex; */
  align-items: baseline;
  a {
    padding: 5px;
    color: ${(props) => props.theme.mainColor};

    &:hover {
      color: ${(props) => props.theme.pointColor};
    }
    &:active {
      color: gray;
    }
  }
  /* p {
    font-size: 80px;
    font-weight: 500;
    padding-bottom: 10px;
  } */
  span {
    /* font-size: 20px; */
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
    /* font-size: 21px; */
    padding-right: 5px;
    font-weight: 500;
  }
  p {
    /* font-size: 21px; */
    padding-left: 5px;
    color: #86868b;
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SkillWarpper = styled.div`
  span {
    /* font-size: 21px; */
    font-weight: 500;
  }
  ul {
    /* font-size: 21px; */
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
  width: 80%;
  margin-bottom: 200px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 60%;
  }
`;
const ImgWrapper = styled.div`
  display: flex;
  /* width: 716px;
  height: 519px; */
  /* overflow: hidden; */
  position: sticky;
  align-self: flex-start;
  top: 150px;
  @media screen and (max-width: 768px) {
    position: static;
  }
`;
const ImgBox = styled.div<{ image: {} }>`
  width: 716px;
  height: 400px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  /* height: 100%; */
  margin: 0 30px 30px 0;
  /* margin-right: 30px; */
  border: 5px solid black;
  box-shadow: 0px 20px 10px -15px #404040;
  @media screen and (max-width: 768px) {
    width: 216px;
    height: 119px;
  }
`;
const Explanation = styled.div`
  white-space: pre-line;
  width: 30%;
  overflow: hidden;
  div {
    height: 30px;
  }
  p {
    font-weight: 500;
    line-height: 30px;
    &:first-line {
      font-size: 30px;
      padding-bottom: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default ProjectDetail;
