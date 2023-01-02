import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isVisibleState } from "../atoms";
import sample from "../assets/images/test2.png";
import { useState } from "react";
import { PortfolioContent } from "../utils/PortfolioContent";
import ProjectDetail from "./ProjectDetail";

function ProjectList() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useRecoilState(isVisibleState);
  const [isInfo, setIsInfo] = useState(false);
  const [datas, setDatas] = useState(PortfolioContent);
  const [detailId, setDetailId] = useState<number | null>(null);

  const onClicked = (id: number) => {
    setDetailId(id);
    setIsVisible(false);
    navigate(`/project/${id}`);
  };

  const onMouseOver = () => {
    setIsInfo(true);
  };

  const onMouseOut = () => {
    setIsInfo(false);
  };

  return (
    <>
      <Container>
        {/* <button onClick={onClicked}>Project</button> */}
        {datas.map((data, index) => (
          <Box
            key={index}
            thumbnail={data.thumbnail}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onClick={() => onClicked(data.id)}
          >
            {/* {isInfo && ( */}
            <Info>
              <Title>{data.title}</Title>
              <Overview>{data.description}</Overview>
              <TagWrapper>
                {data.technologies.map((tech, index) => (
                  <Tag key={index}>{tech}</Tag>
                ))}
              </TagWrapper>
            </Info>
            {/* )} */}
          </Box>
        ))}
      </Container>

      {detailId && <ProjectDetail />}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
`;
const Box = styled.div<{ thumbnail: string }>`
  background-image: url(${(props) => props.thumbnail});
  background-size: cover;
  /* background-position: center center; */
  transform-origin: center center;
  height: 400px;
  width: 450px;
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
  opacity: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  transform: translateY(120px);
  transition: all 1s;
  &:hover {
    opacity: 1;
    transform: translateY(0px);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }
`;

const Title = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 500;
`;
const Overview = styled.div`
  color: white;
  font-size: 13px;
  padding: 6px 0;
`;
const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Tag = styled.div`
  background-color: #696869;
  color: white;
  border-radius: 10px;
  padding: 3px 5px 5px 5px;
  font-size: 11px;
  margin: 3px 3px;
`;

export default ProjectList;
