import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import profile from "../assets/images/profile2.png";
import backImg from "../assets/images/milkway.jpg";
import { AboutExperience } from "../utils/PortfolioContent";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { navState } from "../atoms";

function About() {
  const [state, setState] = useRecoilState(navState);
  const datas = AboutExperience;

  const onClicked = (name: string) => {
    setState(name);
  };
  return (
    <>
      <Container>
        <TopWrapper>
          <ProfileImg src={profile} />
          <ProfileTextWrapper>
            <h1>안녕하세요. </h1>
            <h1>성장을 위해 공부하는 신입 프론트엔드 개발자 윤수진입니다. </h1>
            {/* 
            <Title>Contact</Title>
            <ContactWrapper>
              <span>Email</span>
              <p>duckguya@gmail.com</p>
              <span>Channel</span>
              <a href="https://github.com/duckguya" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
            </ContactWrapper> 
            */}
          </ProfileTextWrapper>
        </TopWrapper>

        <MiddleWrapper>
          <IntroduceSkillWrapper>
            <Introduce>
              <Title>Introduce</Title>
              <p>
                {`스타트업에서 백엔드 개발자로서 1년 3개월 일한 경험이 있습니다. 서버와 클라이언트 간 데이터 전송에 대한 기본적인 이해도가 있습니다. 대학시절 디자인을 전공하여 디자인에 대한 전반적인 이해와 감각을 가지고 있습니다.
              
              반복되는 코드를 자동화하는 작업에서 성취감을 느끼고 비효율적인 프로세스를 개선하는 작업을 좋아합니다. 
              사용자의 경험을 생각하며 가지고 온 데이터를 어떻게 활용할지 고민하는 작업은 프론트엔드의 큰 매력이라고 생각합니다.\n
              팀의 소속감을 좋아하며 팀의 성장에 함께하며 도움이 되는 일을 추구합니다.
              `}
              </p>
            </Introduce>
            <Skill>
              <Title>Skill</Title>
              <p>Javascript, React.js, TypeScript, HTML/CSS</p>
            </Skill>
          </IntroduceSkillWrapper>
          <ExperienceWrapper>
            <ExTitleWrapper>
              <Title>Experience</Title>
              <p>
                프로젝트의 방향에 따라 새로운 웹 기술과 지식이 필요할 경우
                긍정적인 마인드로 공부하며 맡은 역할에 집중했습니다.
              </p>
            </ExTitleWrapper>

            {datas.map((data) => (
              <>
                <Hr />
                <ProjectWrapper>
                  <ProjectDesWrapper>
                    <span>{data.name}</span>
                    <p>{data.description}</p>
                  </ProjectDesWrapper>
                  <ProjectTechWrapper>
                    <ul>
                      {data.techDescription.map((tech) => (
                        <li>{tech}</li>
                      ))}
                    </ul>
                    <span>Tech Stack</span>
                    <p>{data.techStack}</p>
                  </ProjectTechWrapper>
                </ProjectWrapper>
              </>
            ))}

            <Hr />

            <Link to={`/mysite/project`} onClick={() => onClicked("/project")}>
              <p style={{ color: "#06c" }}>개인프로젝트 보러가기 &gt;</p>
            </Link>
          </ExperienceWrapper>

          <Education>
            <Title>Education</Title>
            <ul>
              <li>2019.05-2019.11 비트캠프 개발자 양성과정 수료</li>
              <li>2014.03-2016.02 백석예술대학교 영상디자인과 졸업</li>
            </ul>
          </Education>
        </MiddleWrapper>
      </Container>
    </>
  );
}
const Hr = styled.div`
  width: 100%;
  height: 1px;
  /* background-color: ${(props) => props.theme.backColor}; */
  background-color: #e9e9e9;
  margin: 20px 0;
`;
const Container = styled.div`
  padding: 80px 30px;
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
  /* &::before {
    background-image: url(${backImg});
    background-size: cover;
    filter: blur(9px);
    position: absolute;
    width: inherit;
    height: inherit;
    transform: scale(1.3);
    z-index: -1;
    content: "";
  } */
`;
const Background = styled.div`
  /* background-color: rgba(255, 255, 255, 0.4); */
  background-color: white;
  /* color: white; */
  border-radius: 10px;
  padding: 30px;
  margin: 10px;
`;
const TopWrapper = styled(Background)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    color: black;
    font-size: 60px;
    font-weight: 700;
  }
`;
const ProfileImg = styled.img`
  width: 300px;
`;
const ProfileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  font-size: 21px;
  font-weight: 500;
  padding-bottom: 5px;
  color: black;
`;
const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 30%;
  align-items: center;
  grid-gap: 3px;
`;

const IntroduceSkillWrapper = styled.div`
  display: flex;
  /* width: 100vw; */
  justify-content: space-around;
  margin: 50px 0 0 0;
`;
const MiddleWrapper = styled.div`
  white-space: pre-line;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1px;
`;
const Introduce = styled(Background)`
  width: 70%;
  margin-right: 10px;
`;
const Skill = styled(Background)`
  width: 30%;
  margin-left: 10px;
`;

const ExperienceWrapper = styled(Background)`
  h3 {
    font-weight: 400;
  }
  span {
    font-weight: 400;
  }
`;
const ExTitleWrapper = styled.div`
  padding-bottom: 10px;
  p {
    padding-top: 5px;
  }
`;
const ProjectWrapper = styled.div`
  display: flex;
  padding: 10px 0;
`;

const ProjectDesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  span {
    font-weight: 500;
  }
`;
const ProjectTechWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  span,
  p {
    font-size: 14px;
    color: #343434;
  }
  span {
    padding-top: 15px;
    font-weight: 500;
  }
  li {
    list-style: disc;
    margin-left: 18px;
  }
`;

const Education = styled(Background)`
  li {
    list-style: disc;
    margin-left: 18px;
  }
`;

export default About;
