import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isVisibleState } from "../atoms";
import sample from "../assets/images/test.png";

function ProjectList() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useRecoilState(isVisibleState);

  const onClicked = () => {
    navigate("/project/1");
    setIsVisible(false);
  };

  return (
    <Container>
      {/* <button onClick={onClicked}>Project</button> */}
      <Box sample={sample}>1</Box>
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
  background-color: white;
  background-image: url(${(props) => props.sample});
  background-size: cover;
  /* background-position: center center; */
  /* transform-origin: center center; */
  height: 300px;
  width: 250px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;

export default ProjectList;
