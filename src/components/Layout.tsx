import React from "react";
import styled from "styled-components";

interface PropType {
  children?: React.ReactNode;
}

const Layout = ({ children }: PropType) => {
  return <StyledMain>{children}</StyledMain>;
};

const StyledMain = styled.main`
  margin-top: 56px;
  width: 100%;
  min-height: calc(100vh - 56px);
`;

export default Layout;
