import React, { useState } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import * as _var from "@/styles/variables";

import { Section } from "./common/Section";

export const Search = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${_var.space_XS};
`;

export const InputTitle = styled.p`
    padding: 0px ${_var.space_XS};
`;

export const Input = styled.input`
    background: rgba(0, 0, 0, 0.05);
    padding: ${_var.space_S} ${_var.space_S};
    border: none;
    border-radius: ${_var.space_XS};
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${_var.space_S};
`;

export const Card = styled.a`
    display: flex;
    flex-direction: column;
    padding: ${_var.space_M};
    background: ${_var.primary};
    border-radius: calc(${_var.space_S} * 2.5);
    box-shadow: ${_var.cardShadowLarge};
    opacity: ${({ $isHovered, $hoveredCard }) =>
    $hoveredCard && !$isHovered ? 0.75 : 1};
    transition: 150ms ease-in-out;
    transition-property: opacity, transform;

    &:hover {
        transform: scale(1.01);
    }
`;

export const Placeholder = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    background: ${_var.grayscale[900]};
    overflow: hidden;
    border-radius: calc(${_var.space_S});

    & img {
        object-fit: cover;
    }
`;

export const CardInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${_var.space_XS};
    margin-top: ${_var.space_S};

    & h2,
    p {
        color: ${_var.grayscale[900]};
        text-transform: capitalize;
    }
`;

export default function Searchbar({ bars }) {
    const [hoveredCard, setHoveredCard] = useState(null);
        
    return (
        <>
            <Section>
                <Search>
                    <InputTitle>Rechercher lieu, bar, ville...</InputTitle>
                    <Input id="searchbar" />
                </Search>
            </Section>
            <Section style={{ background: `${_var.grayscale[100]}` }}>
                <Cards>
                    {bars.map((bar) => (
                        <Card
                            key={bar.id}
                            onMouseEnter={() => setHoveredCard(bar.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            $isHovered={hoveredCard === bar.id}
                            $hoveredCard={hoveredCard}
                        >
                            <Placeholder>
                                <Image
                                    src={`/img/${bar.logo}`}
                                    fill
                                    size="auto"
                                    priority={false}
                                    alt={`Logo du bar ${bar.name}`}
                                />
                            </Placeholder>
                            <CardInfos>
                                <h2>{bar.name}</h2>
                                <p>
                                    {bar.adress}, {bar.zipcode}, {bar.city}
                                </p>
                            </CardInfos>
                        </Card>
                    ))}
                </Cards>
            </Section>
        </>
    );
}
