import React from "react"
import Image from "next/image"
import database from "@/_database"
import serializedDate from "@/lib/serializeDate"

import { H1, H2 } from "../components/common/Typefaces"
import { Section } from "../components/common/Section"

export default function Tournaments({ cities, tournaments }) {
    return (
        <Section key={cities.id}>
            <H1>Prochains Tournois</H1>
            <select aria-label="Sélécteur de villes" name="city-select" id="city-select">
                <option>-- Sélectionnez une ville --</option>
                {cities.map((city) => (
                    <option>{ city.city }</option>
                ))}
            </select>

            {tournaments.map((tournament) => (
                <Section key={tournament.id} className="tournaments">
                    <div>
                        <Image 
                            src={`/img/${tournament.logo}`}
                            height={200}
                            width={200}
                            priority={false}
                            alt={`Logo du bar ${tournament.name}`}
                        >
                        </Image>
                    </div>
                    <H2><a href={`/bars/${tournament.id}`}>{ tournament.name }, { tournament.city }</a></H2>
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
