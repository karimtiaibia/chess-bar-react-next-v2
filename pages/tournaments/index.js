import React from "react"
import database from "@/_database"
import serializedDate from "@/lib/serializeDate"

import { H1, Label } from "../components/common/Typefaces"
import { Section } from "../components/common/Section"

export default function Tournaments({ cities, tournaments }) {
    return (
        <Section>
            <H1>Prochains Tournois</H1>
            <Label htmlFor="city-select"></Label>
            <select aria-label="Sélécteur de villes" name="city-select" id="city-select">
                <option selected value="">-- Sélectionnez une ville --</option>
                {cities.map((city) => (
                    <option value='{ city.city }'>{ city.city }</option>
                ))}
            </select>

            {tournaments.map((tournament) => (
                <Section className="tournaments">
                    <div>
                        <img src={`../img/${tournament.logo}`}></img>
                    </div>
                    <h2><a href={`/bars/${tournament.id}`}>{ tournament.name }, { tournament.city }</a></h2>
                    <h3>{ new Date(tournament.date).toLocaleDateString('fr-FR') }</h3>
                    <h4>{ tournament.description }</h4>
                </Section>
            ))}
        </Section>
    )
};

export async function getServerSideProps() {
    
    const [tournaments] = await database.query(`
        SELECT * FROM tournament
        JOIN bar ON tournament.id_bar = bar.id
        ORDER BY bar.id, tournament.date
    `);

    const [cities] = await database.query(`
        SELECT DISTINCT city FROM bar
        ORDER BY city
    `);
    
    console.log(tournaments)
    return {
        props: {
            cities: serializedDate(cities),
            tournaments: serializedDate(tournaments),
        },
        
    };
}
