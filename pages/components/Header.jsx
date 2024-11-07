import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";

import * as _var from "../../styles/variables";

import { isAuthenticated, isAdmin } from "@/_middlewares";

const menuTiming = "150ms";

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${_var.space_XL};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: ${_var.grayscale[50]};
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    z-index: 1000;
`;

const Logo = styled(Link)`
    position: relative;
    height: ${_var.space_L};
    width: 160px;

    & img {
        width: 100%;
        object-fit: contain;
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${_var.space_S};
`;

const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${_var.space_S};
    list-style: none;
`;

const Li = styled.li`
    ${(props) =>
    (props.$userStatus === "authenticated" ||
    props.$userStatus === "notAuthenticated" ||
    props.$userStatus === "admin") &&
    css`
        text-decoration: underline;

        & a {
            color: ${_var.grayscale[900]};
        }
    `}
`;

const BurgerContainer = styled.div`
    position: relative;
    width: ${_var.space_S};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4px;
    cursor: pointer;
    z-index: 9999;

    & span {
        width: 100%;
        height: 2px;
        background: ${_var.grayscale[800]};
        transition: ${menuTiming} ease-in-out;
        transition-property: opacity, transform;
    }

    ${(props) =>
        props.$active &&
    css`
        & :first-child {
            transform: translateY(6px) rotate(45deg);
        }
        & :last-child {
            transform: translateY(-6px) rotate(-45deg);
        }
    `}
`;

const Burger = ({ onClick, active }) => {
    return (
        <BurgerContainer onClick={onClick} $active={active}>
            <span></span>
            <span style={{ opacity: active ? 0 : 1 }}></span>
            <span></span>
        </BurgerContainer>
    );
};

const MenuContainer = styled.div`
    position: absolute;
    top: ${_var.space_XL};
    left: 0;
    width: 100%;
    height: calc(100vh - ${_var.space_XL});
    background: ${_var.grayscale[1000]};
    opacity: 0;
    pointer-events: none;
    z-index: 2000;
    transition: opacity ${menuTiming} ease-in-out;

    ${(props) =>
        props.$active &&
    css`
        opacity: 1;
        pointer-events: auto;
    `}
`;

const AltNav = styled.nav`
    position: relative;
    width: 100%;
    height: 100%;
    padding: ${_var.space_M};
`;

const AltNavList = styled.ul`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: ${_var.space_S};

    & li {
        color: ${_var.grayscale[50]};
    }
`;

const Menu = ({ active }) => {
    return (
    <MenuContainer $active={active}>
        <AltNav>
            <AltNavList style={{ flexDirection: "column" }}>
                <Li>
                    <Link id="tournaments" href="/tournaments">
                        Tournois à venir
                    </Link>
                </Li>
                <Li>
                    <Link id="rules" href="/rules">
                        Règlement
                    </Link>
                </Li>
            </AltNavList>
        </AltNav>
    </MenuContainer>
    );
};

export default function Header() {
    const [userStatus, setUserStatus] = useState("notAuthenticated");
    const [menuActive, setMenuActive] = useState(false);

    return (
        <StyledHeader>
            <Logo href="/">
                <Image src="/img/logo.png" fill alt="Logo de Chess Bar" />
            </Logo>
            <Nav>
                <NavList id="links">
                    <Li>
                        <Link id="tournaments" href="/tournaments">
                            Tournois à venir
                        </Link>
                    </Li>
                    <Li>
                        <Link id="rules" href="/rules">
                            Règlement
                        </Link>
                    </Li>

                    {/* display when user is {authenticated} */}
                    {userStatus === "authenticated" && (
                        <>
                            <Li $userStatus={userStatus}>
                                <Link id="account" href="/account">
                                    Profil
                                </Link>
                            </Li>
                            <Li $userStatus={userStatus}>
                                <Link id="logout" href="/logout">
                                    Déconnexion
                                </Link>
                            </Li>
                        </>
                    )}

                    {/* display when user is {notAuthenticated} */}
                    {userStatus === "notAuthenticated" && (
                        <>
                            <Li $userStatus={userStatus}>
                                <Link id="login" href="/login">
                                    Connexion
                                </Link>
                            </Li>
                            <Li $userStatus={userStatus}>
                                <Link id="register" href="/register">
                                    S&apos;inscrire
                                </Link>
                            </Li>
                        </>
                    )}

                    {/* display when user is {admin} */}
                    {userStatus === "admin" && (
                        <>
                            <Li $userStatus={userStatus}>
                                <Link id="admin" href="/admin">
                                    Administration
                                </Link>
                            </Li>
                        </>
                    )}
                </NavList>
                <Burger
                    onClick={() => setMenuActive(!menuActive)}
                    active={menuActive}
                />
            </Nav>
            <Menu active={menuActive} />
        </StyledHeader>
    );  
}
