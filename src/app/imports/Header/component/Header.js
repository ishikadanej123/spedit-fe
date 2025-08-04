"use client";
import styled from "styled-components";
// import logo from "./public/assets/logo.png";

const Header = () => {
  return (
    <Headers>
      <Logo>
        <img src="../assets/logo.png" alt="Logo" />
      </Logo>

      <Menu>
        <List>Home</List>
        <List>About</List>
        <List>Shop</List>
        <List>News</List>
        <List>Pages</List>
        <List>Contact</List>
      </Menu>

      <Icons></Icons>
    </Headers>
  );
};

const Headers = styled.div``;
const Logo = styled.div``;
const Menu = styled.ul``;
const List = styled.li`
  color: black;
`;
const Icons = styled.div``;

export default Header;
