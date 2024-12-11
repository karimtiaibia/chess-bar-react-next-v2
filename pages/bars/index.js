import database from "../../_database";
import serializedDate from "@/lib/serializeDate";
import styled from "styled-components";

import { Section } from "../components/common/Section";
import { Ul } from "../components/common/Ul";
import { H1 } from "../components/common/Typefaces";

export default function Bars({ bars }) {
    return (
        <Section>
            <H1>Liste des bars</H1>
            <Ul>
                {bars.map((bar) => (
                    <li key={bar.id}>{bar.name}</li>
                ))}
            </Ul>
        </Section>
    );
}

export async function getServerSideProps() {
    
    const [bars] = await database.query(`SELECT * FROM bar`)
    const [users] = await database.query(`SELECT * FROM user`);
    const [tournaments] = await database.query(`SELECT * FROM tournament`)
    
    return {
        props: {
            bars: serializedDate(bars), 
            users: serializedDate(users),
            tournaments: serializedDate(tournaments),
        },
    };
}
