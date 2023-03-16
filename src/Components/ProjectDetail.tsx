import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router-dom";
import styled from "styled-components";
import { GetProjectDetail, IProjectData } from "../api";
// import sample from "../assets/images/net.gif";

function ProjectDetail() {
  const detailMatch = useMatch("/mysite/project/:projectId");

  const id = Number(detailMatch?.params.projectId);

  const { isLoading, data } = useQuery<IProjectData>(["data"], () =>
    GetProjectDetail(id)
  );

  // const datas = PortfolioContent;
  // const data = datas[id];

  return (
    <Container>
      {data && (
        <ContentWrapper>
          <TextWrapper>
            <Header>
              <a
                href={data.demo_link}
                title={"잘부탁드립니다!"}
                target="_blank"
                rel="noreferrer"
              >
                Demo &gt;
              </a>
              <a
                href={data.github_link}
                title={"잘부탁드립니다!"}
                target="_blank"
                rel="noreferrer"
              >
                GitHub &gt;
              </a>
              <Title>{data.title}</Title>
              <span>{data.description}</span>
            </Header>
            <TechWrapper>
              <span>사용 기술</span>
              {data.technologies.map((tech, index) =>
                tech === data.technologies[data.technologies.length - 1] ? (
                  <p key={index}>{tech}</p>
                ) : (
                  <p key={index}>{tech},</p>
                )
              )}
            </TechWrapper>
            <SkillWarpper>
              <span>구현 기능</span>
              <ul>
                {data.function.map((f, index) => (
                  <li key={index}>{f}</li>
                ))}
              </ul>
            </SkillWarpper>
          </TextWrapper>

          {/* <ScrollWrapper> */}
          {data.contents.map((content, index) => (
            <ScrollWrapper key={index}>
              <ImgWrapper>
                <ImgBox image={content.image} />
              </ImgWrapper>
              <Explanation>
                {/* <div /> */}
                <ContentSubTitle>{content.sub_title}</ContentSubTitle>
                <ContentText>{content.text}</ContentText>
                <div />
              </Explanation>
            </ScrollWrapper>
          ))}
        </ContentWrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 100px 0;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 60px;
  width: 65vw;
  margin-bottom: 100px;
  width: 90%;
`;
const Header = styled.div`
  align-items: baseline;
  a {
    padding: 5px;
    color: ${(props) => props.theme.mainColor};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.pointColor};
    }
    &:active {
      color: gray;
    }
  }

  span {
    padding-left: 8px;
  }
`;

const TechWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 50px 0;
  span {
    font-weight: 500;
    width: 11%;
  }
  p {
    color: #86868b;
    font-weight: 500;
    padding-right: 5px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SkillWarpper = styled.div`
  display: flex;
  span {
    font-weight: 500;
    width: 11%;
  }
  ul {
    font-weight: 500;
    color: #86868b;
  }
  li {
    list-style-position: inside;
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
  position: sticky;
  align-self: flex-start;
  top: 150px;
  @media screen and (max-width: 768px) {
    position: static;
  }
`;
const ImgBox = styled.div<{ image: {} }>`
  width: 716px;
  height: 410px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 30px 30px 0;
  border: 5px solid black;
  box-shadow: 0px 20px 10px -15px #404040;
  @media screen and (max-width: 768px) {
    width: 416px;
    height: 219px;
  }
`;
const Explanation = styled.div`
  white-space: pre-line;
  width: 30%;
  overflow: hidden;
  div {
    height: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const ContentFont = styled.p`
  font-weight: 500;
  line-height: 30px;
  /* &:first-line {
      font-size: 30px;
      line-height: 50px;
    } */
`;

const ContentSubTitle = styled(ContentFont)`
  font-size: 30px;
  line-height: 50px;
`;
const ContentText = styled(ContentFont)`
  /* word-break: normal; */
`;

export default ProjectDetail;
