import React from "react"
import database from "@/_database"
import serializedDate from "@/lib/serializeDate"

import { Button } from "@/pages/components/common/Button";
import { Section } from "@/pages/components/common/Section"
import { 
    H1, H2,
    Table, Thead, Tbody, Tr, Th, Td, TableContainer, Control
} from "../components/common/Typefaces"

export default function Admin({ bars, tournaments }) {

    return (
        <Section>
            <H1>Administration</H1>
            <Control id="admin-controls">
                <a href="/admin/bar"><Button>Ajouter un bar</Button></a>
                <a href="/admin/tournament"><Button>Ajouter un tournoi</Button></a>
                <a href="/admin/ranking"><Button>Gérer les scores</Button></a>
            </Control>

            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Lieu</Th>
                            <Th>Date d'inscription</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <H2>Bars</H2>
                        {bars.map((bar) => (
                            <Tr>
                                <Td>{ bar.name } { bar.city } ({ bar.zipcode })</Td>
                                <Td>{ new Date(bar.date).toLocaleDateString("fr-FR") }</Td>
                                <Td>
                                    <Button key={bar.id}>Modifier</Button>
                                    <Button key={bar.id}>Supprimer</Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Lieu</Th>
                            <Th>Date du tournoi</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <H2 id="tournaments-list">Tournois</H2>
                        {tournaments.map((tournament, index) => ( 
                            <Tr>
                                <Td>{ tournament.name } { tournament.city } ({ tournament.zipcode })</Td>
                                <Td>{ new Date(tournaments.date).toLocaleDateString("fr-FR") }</Td>
                                <Td>
                                    <Button key={tournament.id}>Modifier</Button>
                                    <Button key={tournament.id}>Supprimer</Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Section>
    )
};

export async function getServerSideProps() {
    
    const [bars] = await database.query(`
        SELECT * FROM bar
    `)
    const [tournaments] = await database.query(`
        SELECT * FROM bar
        JOIN tournament ON bar.id = tournament.id_bar
    `)
    
    return {
        props: {
            bars: serializedDate(bars), 
            tournaments: serializedDate(tournaments),
        },
    };
}
