import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isVisibleState, navActiveState } from "../atoms";

function Header() {
  const [isVisible, setIsVisible] = useRecoilState(isVisibleState);
  const [btnActive, setBtnActive] = useRecoilState(navActiveState);

  const categories = [
    { id: 1, name: "Home", linkName: "/" },
    { id: 2, name: "Project", linkName: "/project" },
    { id: 3, name: "About", linkName: "/about" },
    { id: 4, name: "Resume", linkName: "/resume" },
  ];

  const onClicked = (idx: number) => {
    setBtnActive(idx);
    setIsVisible(true);
  };

  return (
    <Nav>
      {categories.map((category, idx) => (
        <Link key={idx} to={category.linkName}>
          <Tab
            value={idx}
            className={idx === btnActive ? " active" : ""}
            // onClick={() => toggleActive}
            onClick={() => onClicked(idx)}
          >
            {category.name}
          </Tab>
        </Link>
      ))}
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  box-shadow: 5px 5px 5px 5px #dcdcdc;
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.backColor};
  z-index: 99;
`;
const Tab = styled.button`
  margin: 15px 5px;
  color: ${(props) => props.theme.mainColor};
  padding: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.pointColor};
  }
  &.active {
    color: ${(props) => props.theme.pointColor};
  }
`;

export default Header;
