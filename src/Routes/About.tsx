import styled from "styled-components";
import profile from "../assets/images/profile2.png";
import imgTravel from "../assets/images/travel.jpg";

const Container = styled.div`
  padding: 80px 30px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
  color: white;
  &::before {
    background-image: url(${imgTravel});
    filter: blur(10px);
    position: absolute;
    width: inherit;
    height: inherit;
    transform: scale(1.3);
    z-index: -1;
    content: "";
  }
`;
const Background = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding: 30px;
`;
const TopWrapper = styled(Background)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
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

const MiddleWrapper = styled.div`
  display: flex;
  /* width: 100vw; */
  justify-content: space-around;
  margin: 50px 0 0 0;
  h2 {
    font-size: 21px;
    font-weight: 500;
    padding-bottom: 10px;
  }
  P {
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 1px;
  }
`;
const Letter = styled(Background)`
  width: 70%;
  margin-right: 5px;
`;
const Skill = styled(Background)`
  width: 30%;
  margin-left: 5px;
`;

function About() {
  return (
    <>
      <Container>
        <TopWrapper>
          <ProfileImg src={profile} />
          <ProfileTextWrapper>
            <p>안녕하세요. </p>
            <p>프론트엔드 개발자 Sujin입니다! </p>
          </ProfileTextWrapper>
        </TopWrapper>
        <MiddleWrapper>
          <Letter>
            <h2>자기소개</h2>
            <p>
              아주나이스 두두두두두두두두두아주나이스 우우우우어떤사랑은 말해꼬
              끝이라고 맞잡은 두손의 버스처럼 포에버 아주나이스
              두두두두두두두두두아주나이스 우우우우어떤사랑은 말해꼬 끝이라고
              맞잡은 두손의 버스처럼 포에버 아주나이스
              두두두두두두두두두아주나이스 우우우우어떤사랑은 말해꼬 끝이라고
              맞잡은 두손의 버스처럼 포에버 아주나이스
              두두두두두두두두두아주나이스 우우우우어떤사랑은 말해꼬 끝이라고
              맞잡은 두손의 버스처럼 포에버 아주나이스
              두두두두두두두두두아주나이스 우우우우어떤사랑은 말해꼬 끝이라고
              맞잡은 두손의 버스처럼 포에버
            </p>
          </Letter>
          <Skill>
            <h2>Skill</h2>
          </Skill>
        </MiddleWrapper>
      </Container>
    </>
  );
}
export default About;
