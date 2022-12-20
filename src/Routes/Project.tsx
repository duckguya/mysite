import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isVisibleState } from "../atoms";
import ProjectDetail from "../Components/ProjectDetail";
import ProjectList from "../Components/ProjectList";

const Container = styled.div<{ isvisible: boolean }>`
  padding: ${(props) => (props.isvisible ? "100px" : "50px")};
`;

function Project() {
  const [isVisible, setIsVisible] = useRecoilState(isVisibleState);

  return (
    <>
      <Container isvisible={isVisible}>
        {isVisible && <ProjectList />}
      </Container>
      {!isVisible && <ProjectDetail />}
    </>
  );
}
export default Project;
