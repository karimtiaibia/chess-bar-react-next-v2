import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";
import * as _var from "@/styles/variables";

import { Section } from "./common/Section";
import { H1, H2 } from "./common/Typefaces";

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
    margin-top: ${_var.space_S};

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
    const [searchQuery, setSearchQuery] = useState("");
    const resultsRef = useRef([]);

    const handleInputChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        resultsRef.current.forEach((result) => {
            const content = result.textContent.toLowerCase();
            if (content.includes(query) && query !== "") {
                result.style.display = "flex";
            } else {
                result.style.display = "none";
            }
        });
    };
    
    return (
        <>
            <Section>
                <Search>
                    <InputTitle>Rechercher lieu, bar, ville...</InputTitle>
                    <Input 
                        key=""
                        id="searchbar"
                        type="text"
                        placeholder="Rechercher..."
                        value={searchQuery}
                        onChange={handleInputChange} 
                    />
                </Search>
            
            {/* <Section style={{ background: `${_var.grayscale[100]}` }}> */}
                <Cards>
                    {bars.map((bar, index) => (
                        <Link href={`/bars/${bar.id}`  }>
                            <Card
                                key={bar.id}
                                onMouseEnter={() => setHoveredCard(bar.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                $isHovered={hoveredCard === bar.id}
                                $hoveredCard={hoveredCard}
                                ref={(el) => (resultsRef.current[index] = el)}
                                style={{ display: "none" }}
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
                                    <H1>{bar.name}</H1>
                                    <H2>{bar.adress}, {bar.zipcode}, {bar.city}</H2>
                                </CardInfos>
                            </Card>
                        </Link>
                    ))}
                </Cards>
            {/* </Section> */}
            </Section>
        </>
    );
}

export async function getServerSideProps() {
    const id = await fetch(`/bars/${params.id}`);
    const bars = await id.json();

    console.log(id)
    if (!bars) {
        return {notFound: true};
    }

    return {
        props: { bars }, // Will be passed to the page component as props
    };
}
