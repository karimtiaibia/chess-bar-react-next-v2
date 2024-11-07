import database from "../../_database";
import serializedDate from "@/lib/serializeDate";
import styled from "styled-components";

import { Section } from "../components/common/Section";
import { Ul } from "../components/common/Ul";
import { H1 } from "../components/common/Typefaces";

export default function Bars({ data }) {
    return (
        <Section>
            <H1>Liste des bars</H1>
            <Ul>
                {data.map((bar) => (
                    <li key={bar.id}>{bar.name}</li>
                ))}
            </Ul>
        </Section>
    );
}

export async function getServerSideProps() {
    const [bars] = await database.query(`SELECT * FROM bar`);
    return {
        props: {
            data: serializedDate(bars),
        },
    };
}
