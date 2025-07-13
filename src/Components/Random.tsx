import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isVisibleState } from "../atoms";
import { FC, useEffect, useState } from "react";
import { Input } from "antd";
const { Search } = Input;

function Random() {
  const [males, setMales] = useState<string[]>([
    "김상진",
    "김보상",
    "김성근",
    "나승우",
    "박영식",
    "이대열",
    "이병황",
    "이종정",
    "정용현",
    "조민석",
  ]);

  const [females, setFemales] = useState<string[]>([
    "윤수진",
    "임수빈",
    "임은빈",
    "정미경",
    "임채린",
    "임청영",
    "김남희",
    "김성실",
    "박나리",
    "심일산",
    "이재숙",
    "최희선",
  ]);
  const [teamSize, setTeamSize] = useState<number>(3);
  const [teams, setTeams] = useState<{ male: string[][]; female: string[][] }>({
    male: [],
    female: [],
  });
  const [selectedMales, setSelectedMales] = useState<string[]>(males);
  const [selectedFemales, setSelectedFemales] = useState<string[]>(females);
  const [newFemaleName, setNewFemaleName] = useState("");
  const [newMaleName, setNewMaleName] = useState("");

  const addFemaleName = () => {
    const trimmed = newFemaleName.trim();
    if (trimmed && !females.includes(trimmed)) {
      setFemales((prev) => [...prev, trimmed]);
      setSelectedFemales((prev) => [...prev, trimmed]);
      setNewFemaleName("");
    }
  };

  const addMaleName = () => {
    const trimmed = newMaleName.trim();
    if (trimmed && !males.includes(trimmed)) {
      setMales((prev) => [...prev, trimmed]);
      setSelectedMales((prev) => [...prev, trimmed]);
      setNewMaleName("");
    }
  };

  const shuffleArray = (array: string[]): string[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const splitIntoTeams = (array: string[], teamSize: number): string[][] => {
    const shuffled = shuffleArray(array);
    const teams: string[][] = [];
    if (teamSize === 3 && shuffled.length % 3 === 1) {
      let i = 0;
      while (i < shuffled.length - 4) {
        teams.push(shuffled.slice(i, i + 3));
        i += 3;
      }
      teams.push(shuffled.slice(i, i + 2));
      teams.push(shuffled.slice(i + 2, i + 4));
    } else {
      for (let i = 0; i < shuffled.length; i += teamSize) {
        teams.push(shuffled.slice(i, i + teamSize));
      }
    }
    return teams;
  };

  const generateTeams = () => {
    const shuffledMales = shuffleArray(selectedMales);
    const shuffledFemales = shuffleArray(selectedFemales);

    const maleTeams = splitIntoTeams(shuffledMales, teamSize);
    const femaleTeams = splitIntoTeams(shuffledFemales, teamSize);

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
      <CheckboxContainer>
        조 구성 인원
        <CheckBoxLabel>
          <HiddenCheckbox
            type="radio"
            value={2}
            checked={teamSize === 2}
            onChange={() => setTeamSize(2)}
          />
          <StyledCheckbox checked={teamSize === 2} />
          2명
        </CheckBoxLabel>
        <CheckBoxLabel>
          <HiddenCheckbox
            type="radio"
            value={3}
            checked={teamSize === 3}
            onChange={() => setTeamSize(3)}
          />
          <StyledCheckbox checked={teamSize === 3} /> {/* ✅ 이 부분이 핵심! */}
          3명
        </CheckBoxLabel>
      </CheckboxContainer>
      <Divider />
      <CheckContainer>
        <h2 className="title">여자 출석 체크</h2>
        <CheckNameWrapper>
          {females.map((name) => (
            <label key={name}>
              <input
                type="checkbox"
                checked={selectedFemales.includes(name)}
                onChange={() => {
                  setSelectedFemales((prev) =>
                    prev.includes(name)
                      ? prev.filter((n) => n !== name)
                      : [...prev, name]
                  );
                }}
              />
              {name}
            </label>
          ))}
        </CheckNameWrapper>
      </CheckContainer>

      <CheckContainer>
        <h2 className="title">남자 출석 체크</h2>
        <CheckNameWrapper>
          {males.map((name) => (
            <label key={name}>
              <input
                type="checkbox"
                checked={selectedMales.includes(name)}
                onChange={() => {
                  setSelectedMales((prev) =>
                    prev.includes(name)
                      ? prev.filter((n) => n !== name)
                      : [...prev, name]
                  );
                }}
              />
              {name}
            </label>
          ))}
        </CheckNameWrapper>
      </CheckContainer>
      <Divider />
      <div>
        <h3>여자 이름 추가</h3>
        <input
          type="text"
          value={newFemaleName}
          onChange={(e) => setNewFemaleName(e.target.value)}
          placeholder="이름 입력"
        />
        <button onClick={addFemaleName}>추가</button>
      </div>

      <div style={{ margin: "20px 0" }}>
        <h3>남자 이름 추가</h3>
        <input
          type="text"
          value={newMaleName}
          onChange={(e) => setNewMaleName(e.target.value)}
          placeholder="이름 입력"
        />
        <button onClick={addMaleName}>추가</button>
      </div>
      <Divider />
      <Button onClick={generateTeams}>조 편성하기</Button>

      <CardContainer>
        <div>{getCurrentDateTime()}</div>
        <CardWrapper>
          <TitleWrapper>
            <Title>여</Title>
          </TitleWrapper>
          {teams.female.map((team, index) => (
            <Card key={`female-${index}`}>
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
          {teams.male.map((team, index) => (
            <Card key={`male-${index}`}>
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

const CheckContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 0 20px 0px 20px;
  margin-bottom: 20px;
  /* label {
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  } */
  /* input {
    margin-right: 8px;
  } */

  .title {
    text-align: center;
    width: 100%;
  }
`;
const CheckNameWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  /* label {
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  } */
  input {
    margin-right: 8px;
  }
`;
const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;

const HiddenCheckbox = styled.input`
  display: none;
`;

const StyledCheckbox = styled.span<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 6px;
  border: 2px solid;
  display: inline-block;
  background: ${(props) => (props.checked ? "#00ff00" : "#fff")};
  transition: background 0.2s ease;

  ${CheckBoxLabel}:hover & {
    border-color: #00ff00;
  }
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
  padding-top: 30px;
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
const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px solid #ddd;
  margin-bottom: 30px;
`;

export default Random;
