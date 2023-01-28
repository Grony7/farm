import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledSection, Copyright } from "./styles";

// подвал сайта
const Footer = () => {
  return (
    <StyledSection as="footer">
      <Logo />
      <Copyright>Создано 2023</Copyright>
    </StyledSection>
  );
}

export default Footer;
