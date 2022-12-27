import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isVisibleState, navActiveState, navState } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [isVisible, setIsVisible] = useRecoilState(isVisibleState);
  const [btnActive, setBtnActive] = useRecoilState(navActiveState);
  const [state, setState] = useRecoilState(navState);
  const location = useLocation();

  const categories = [
    { id: 1, name: "Home", linkName: "/" },
    { id: 2, name: "Project", linkName: "/project" },
    { id: 3, name: "About", linkName: "/about" },
    { id: 4, name: "Resume", linkName: "/resume" },
  ];

  useEffect(() => {
    // let path = location.pathname.slice(1);
    let path = location.pathname;
    if (location.pathname === "/") setState(path);
    if (location.pathname === "/project") setState(path);
    if (location.pathname === "/about") setState(path);
  }, [state]);

  const onClicked = (name: string) => {
    // setBtnActive(idx);
    // setIsVisible(true);
    setState(name);
  };

  return (
    <Nav>
      {categories.map((category, idx) => (
        <Link key={idx} to={category.linkName}>
          <Tab
            value={idx}
            className={category.linkName == state ? " active" : ""}
            // onClick={() => toggleActive}
            onClick={() => onClicked(category.name)}
          >
            {category.name}
          </Tab>
        </Link>
      ))}
      <a href="https://github.com/duckguya" target="_blank">
        <FontAwesomeIcon icon={faGithub} color="black" />
      </a>
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.backColor};
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
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
