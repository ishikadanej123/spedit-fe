"use client";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  return (
    <Headers>
      <Logo>
        <img src="/assets/logo.png" alt="Logo" />
      </Logo>

      <Menu>
        <List>Home</List>
        <List>About</List>
        <List>Shop</List>
        <List>News</List>
        <List>Pages</List>
        <List>Contact</List>
      </Menu>

      <Icons>
        <FaSearch />
        <FaUser />
        <FaHeart />
        <FaCartArrowDown />
      </Icons>
    </Headers>
  );
};

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;
const Logo = styled.div``;
const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
`;
const List = styled.li`
  color: black;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
`;
const Icons = styled.div`
  display: flex;
  gap: 35px;
  font-size: 20px;
  color: black;
`;

export default Header;
