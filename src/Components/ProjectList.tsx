import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isVisibleState } from "../atoms";
import sample from "../assets/images/test2.png";
import { useState } from "react";

function ProjectList() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useRecoilState(isVisibleState);
  const [isInfo, setIsInfo] = useState(false);

  const onClicked = () => {
    navigate("/project/1");
    setIsVisible(false);
  };

  const onMouseOver = () => {
    setIsInfo(true);
  };

  const onMouseOut = () => {
    setIsInfo(false);
  };

  return (
    <Container>
      {/* <button onClick={onClicked}>Project</button> */}
      <Box
        sample={sample}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onClicked}
      >
        {/* {isInfo && ( */}
        <Info>
          <Title>Project's name</Title>
          <Overview>Overview</Overview>
          <TagWrapper>
            <Tag>tag1</Tag>
            <Tag>tag2</Tag>
            <Tag>tag3</Tag>
          </TagWrapper>
        </Info>
        {/* )} */}
      </Box>
      <Box sample={sample}>2</Box>
      <Box sample={sample}>3</Box>
      <Box sample={sample}>4</Box>
      <Box sample={sample}>5</Box>
      <Box sample={sample}>5</Box>
      <Box sample={sample}>5</Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Box = styled.div<{ sample: string }>`
  background-image: url(${(props) => props.sample});
  background-size: cover;
  /* background-position: center center; */
  transform-origin: center center;
  height: 300px;
  width: 250px;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* padding: 30px; */
  overflow: hidden;
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;

const Info = styled.div`
  transition: all 0.4s;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-end;
  padding: 30px;
  height: 100%;
  /* background-color: black; */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  transform: translateY(120px);
  transition: all 0.8s;
  &:hover {
    transform: translateY(0px);
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
  }
`;

const Title = styled.div`
  color: white;
  font-size: 25px;
`;
const Overview = styled.div`
  color: #d5d5d5;
  font-size: 13px;
  padding: 6px 0;
`;
const TagWrapper = styled.div`
  display: flex;
`;
const Tag = styled.div`
  background-color: #696869;
  color: white;
  border-radius: 10px;
  padding: 5px;
  font-size: 11px;
  margin: 0 3px;
`;

export default ProjectList;
