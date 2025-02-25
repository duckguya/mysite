import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isVisibleState } from "../atoms";
import { FC, useEffect, useState } from "react";
import { Input } from "antd";
const { Search } = Input;

function Random() {
  const females = [
    "윤수진",
    "임수빈",
    "임은빈",
    "정미경",
    "임채린",
    "임청명",
    "김남희",
    "김성실",
    "박나리",
    "심일산",
    "이재숙",
    "최희선",
  ];
  const males = [
    "김상진",
    "김보상",
    "김성근",
    "나승우",
    "박영식",
    "이광렬",
    "이대열",
    "이민학",
    "이병황",
    "이종정",
    "정용현",
    "조민석",
  ];
  const [teams, setTeams] = useState<{ male: string[][]; female: string[][] }>({
    male: [],
    female: [],
  });
  const shuffleArray = (array: string[]): string[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const splitIntoTeams = (array: string[], teamSize: number): string[][] => {
    const teams = [];
    for (let i = 0; i < array.length; i += teamSize) {
      teams.push(array.slice(i, i + teamSize));
    }
    return teams;
  };

  const generateTeams = () => {
    const shuffledMales = shuffleArray(males);
    const shuffledFemales = shuffleArray(females);

    const maleTeams = splitIntoTeams(shuffledMales, 3);
    const femaleTeams = splitIntoTeams(shuffledFemales, 3);

    setTeams({ male: maleTeams, female: femaleTeams });
  };
  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const date = String(now.getDate()).padStart(2, "0");

    return `${year}년 ${month}월 ${date}일 침뜸실습조`;
  };

  return (
    <Container>
      <Button onClick={generateTeams}>조 편성하기</Button>

      <CardContainer>
        <div>{getCurrentDateTime()}</div>
        <CardWrapper>
          <TitleWrapper>
            <Title>여</Title>
          </TitleWrapper>
          {teams.female &&
            teams.female.map((team, index) => (
              <Card>
                <h3 className="text-xl mb-2">{index + 1}조</h3>
                <Name>
                  <ul className="styled-ul">
                    {team.map((member, idx) => (
                      <li key={idx} className="styled-li">
                        {member}
                      </li>
                    ))}
                  </ul>
                </Name>
              </Card>
            ))}
        </CardWrapper>
        <CardWrapper>
          <TitleWrapper>
            <Title>남</Title>
          </TitleWrapper>
          {teams.male &&
            teams.male.map((team, index) => (
              <Card>
                <h3 className="text-xl mb-2">{index + 1}조</h3>
                <Name>
                  <ul className="styled-ul">
                    {team.map((member, idx) => (
                      <li key={idx} className="styled-li">
                        {member}
                      </li>
                    ))}
                  </ul>
                </Name>
              </Card>
            ))}
        </CardWrapper>
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 95vh;
  margin: 0 auto;
  padding-top: 100px;
  margin-bottom: 50px;
  justify-content: flex-start;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Button = styled.div`
  display: flex;
  border: none;
  padding: 12px 30px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  height: 20%;
  background: linear-gradient(360deg, #00ff00, #c3ffc3, #ffffff);
  border: 1px solid black;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  justify-content: center;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    background-color: #1976d2;
    transform: scale(0.98);
  }
  @media (max-width: 600px) {
    & {
      justify-content: center;
      font-size: 14px;
    }
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #f7ff00, #fcffdc, #ffffff);
  border: 1px solid black;
  border-radius: 20px;
  padding: 50px;
  width: 80%;
  margin-top: 30px;
  @media (max-width: 600px) {
    & {
      justify-content: center;
      font-size: 14px;
      padding: 10px;
    }
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-top: 10px;
  @media (max-width: 600px) {
    & {
      width: 100%;
      flex-wrap: wrap;
      flex-direction: column;
      /* justify-content: center; */
      font-size: 14px;
    }
  }
`;
const Card = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff, #c3ffc3, #00ff00);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 100px;
  border: 1px solid black;
  @media (max-width: 600px) {
    & {
      width: 100%;
    }
  }
`;
const Name = styled.div`
  @media (max-width: 600px) {
    .styled-ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: flex;
      margin: 0 auto;
      gap: 10px;
    }

    .styled-li {
    }
    & {
      width: 100%;
      display: flex;
      flex-direction: row;
      /* flex-wrap: wrap; */
    }
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 200px;
  line-height: 100%;
  text-align: center;
  @media (max-width: 600px) {
    & {
      justify-content: center;
      height: 0px;
      width: 100%;
      padding-top: 10px;
    }
  }
`;
const TitleWrapper = styled.div`
  align-items: center;
  justify-content: center;
`;

export default Random;
