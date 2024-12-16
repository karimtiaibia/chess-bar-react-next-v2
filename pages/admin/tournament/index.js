import React from "react";
import database from "@/_database";
import serializedDate from "@/lib/serializeDate";

import { Form, H1, Label, Input } from "@/pages/components/common/Typefaces";
import { Button } from "@/pages/components/common/Button";
import { Section } from "@/pages/components/common/Section";

export default function AddTournament({bars, tournaments}) {
    return (
        <Section>
            <H1>Créer un nouveau tournoi</H1>

            <Form action="/admin/tournament/add" method="POST">

                <Label htmlFor="barSelected">Nom du bar : </Label>
                <select id="bar-select" name="barSelected" required >
                    <option>--Sélectionnez un bar--</option>
                    {bars.map((bar) => (
                        <option value={ bar.id }>{ bar.name } {bar.zipcode } { bar.city }</option>
                    ))}
                </select>
                
                <Label htmlFor="tournamentDate">Date du tournoi :</Label>
                <Input id="tournamentDate" type="date" name="tournamentDate" required />

                <Label htmlFor="tournamentStartTime">Heures de début du tournoi : </Label>
                <Input id="tournamentStartTime" type="time" name="tournamentStartTime" min="13:00" max="23:55" value="" required />

                <Label htmlFor="tournamentEndTime">Heures de fin du tournoi : </Label>
                <Input id="tournamentEndTime" type="time" name="tournamentEndTime"  min="13:00" max="23:55" value="" required />

                <Label htmlFor="tournamentDescription">Description (optionnel) : </Label>
                <textarea id="tournamentDescription" name="tournamentDescription" value=""></textarea>

                <Button type="submit">Valider</Button>

            </Form>
        </Section>
    )
}
export async function getServerSideProps() {
    const [bars] = await database.query(`SELECT * FROM bar`)
    const [users] = await database.query(`SELECT * FROM user`);
    const [tournaments] = await database.query(`
        SELECT * FROM tournament 
        JOIN bar
        ON bar.id = tournament.id_bar
    `)

    console.log("Bars :", bars)
    console.log("Users :", users)
    console.log("Tournaments :", tournaments)
    console.log('Returned event data:', JSON.stringify(bars, null, 2));

    return {
        props: {
            bars: serializedDate(bars), 
            users: serializedDate(users),
            tournaments: serializedDate(tournaments),
        },
    };
}
