import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProjectDetail from "../Components/ProjectDetail";

const Container = styled.div<{ isvisible: boolean }>`
  padding: ${(props) => (props.isvisible ? "30px" : 0)};
`;
const Test = styled.div``;
function Project() {
  const navigate = useNavigate();
  const [isVisible, setVisible] = useState(true);

  const onClicked = () => {
    navigate("/project/1");
    setVisible(false);
  };
  return (
    <>
      <Container isvisible={isVisible}>
        {isVisible && <button onClick={onClicked}>Project</button>}
      </Container>
      {!isVisible && <ProjectDetail />}
    </>
  );
}
export default Project;
