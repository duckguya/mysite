import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isVisibleState } from "../atoms";
import ProjectDetail from "../Components/ProjectDetail";
import ProjectList from "../Components/ProjectList";

// const Container = styled.div<{ isvisible: boolean }>`
//   padding: ${(props) => (props.isvisible ? "100px" : "50px")};
// `;

const Container = styled.div`
  padding: 100px;
`;

function Playground() {
  const [isVisible, setIsVisible] = useRecoilState(isVisibleState);

  return (
    <>
      <Container>
        <Playground />
      </Container>
      {/* <Container isvisible={isVisible}>
        {isVisible && <ProjectList />}
      </Container> */}
      {/* {!isVisible && <ProjectDetail />} */}
    </>
  );
}
export default Playground;
