import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isVisibleState } from "../atoms";
import ProjectDetail from "../Components/ProjectDetail";

const Container = styled.div<{ isvisible: boolean }>`
  padding: ${(props) => (props.isvisible ? "100px" : "50px")};
`;
const Test = styled.div``;

function Project() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useRecoilState(isVisibleState);

  const onClicked = () => {
    navigate("/project/1");
    setIsVisible(false);
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
