import React , { useEffect, useState } from "react";
import database from "@/_database";
import serializedDate from "@/lib/serializeDate";

import { Button } from "@/pages/components/common/Button";
import { Section } from "@/pages/components/common/Section";
import { 
    H1,
    Form, Label, Table, Tr, Th, Td
 } from "@/pages/components/common/Typefaces";

export default function AddTournament ({bars, rankings, barId}) {
    
    return (
        <Section>
            <H1>Mise à jour des scores</H1>
            <Form id="rankingForm" method="GET">
                <Label htmlFor="barSelected">Nom du bar : </Label>
                <select id="admin-bar-select" name="barSelected" required onchange="handleSelectedBar()">
                    <option value="">--Sélectionnez un bar--</option>
                    {bars.map((bar) => {
                        <option value={ bar.id }>{ bar.name }{ bar.zipcode }{ bar.city }</option>
                    })}
                </select>
                
                <Section className="rankings" id="admin-ranking">
                    <Table>
                        <Tr>
                            <Th>Place</Th>
                            <Th>Nom</Th> 
                            <Th>Score</Th>
                            <Th>Action</Th>
                        </Tr>
                        {rankings.map((ranking, i = 0) => (
                            <Tr key={ranking.id}>
                                <Td>{ i + 1 }</Td>
                                <Td>{ ranking.name }</Td> 
                                <Td>{ ranking.score }</Td>
                                <Td>
                                    <Button>
                                        <a href={`/admin/ranking/bar/${ ranking.id_bar }/${ ranking.id_user }`}>Modifier</a>
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Table>
                </Section>
            </Form>
        </Section>
    )
}

export async function getServerSideProps() {
    const [bars] = await database.query(`SELECT * FROM bar`)
    const [rankings] = await database.query(`SELECT * FROM ranking`)
    
    return {
        props: {
            bars: serializedDate(bars), 
            rankings: serializedDate(rankings), 
        },
    };
}
