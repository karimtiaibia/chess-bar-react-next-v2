import React from "react";
import styled from "styled-components";
import * as _var from "@/styles/variables";
import { FaFacebook, FaInstagram, FaMailBulk } from "react-icons/fa";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    background: white;

    & span {
        color: ${_var.primary};
    }
`;

const Socials = styled.div`
    display: flex;
    gap: 8px;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <Socials>
                <a
                    href="https://www.facebook.com/profile.php?id=100094132932723"
                    target="_blank">
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com/chess___bar/" target="_blank">
                    <FaInstagram />
                </a>
                <a href="mailto: contact@chessbar.fr" target="_blank">
                    <FaMailBulk />
                </a>
            </Socials>
            <span>© 2024 Chess Bar. All rights reserved.</span>
        </StyledFooter>
    );
}
