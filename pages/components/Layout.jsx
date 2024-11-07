import React from "react";
import styled from "styled-components";
import { Inter } from "next/font/google";
import * as _var from "../../styles/variables";

import { GlobalStyles } from "@/lib/GlobalStyles";
import { StyledComponentsRegistry } from "@/lib/StyledComponentsRegistry";

import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

const PageWrapper = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin-top: ${_var.space_XL};
`;

export const MainContent = styled.main`
    flex-grow: 1;
`;

const Layout = ({ children }) => {
    return (
        <StyledComponentsRegistry>
            <GlobalStyles />
            <PageWrapper className={inter.className}>
                <Header />
                <MainContent>{children}</MainContent>
                <Footer />
            </PageWrapper>
        </StyledComponentsRegistry>
    );
};

export default Layout;
