import React from "react"
import database from "@/_database"
import serializedDate from "@/lib/serializeDate"

import { Section } from "../components/common/Section"
import { 
    H1, H2, Button,
    Table, Thead, Tr, Th, Td, TableContainer, ActionTd, 
    Control
} from "../components/common/Typefaces"

export default function Admin({ bars, users, tournaments }) {

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
                    <tbody>
                        <H2>Bars</H2>
                        {bars.map((bar, index) => (
                            <Tr key={index}>
                                <Td>{ bar.name } { bar.city } ({ bar.zipcode })</Td>
                                <Td>{ new Date(bar.date).toLocaleDateString("fr-FR") }</Td>
                                <Td>
                                    <ActionTd>
                                        <Button key={bar.id}>Supprimer</Button>
                                    </ActionTd>
                                    <ActionTd>
                                        <Button key={bar.id}>Modifier</Button>
                                    </ActionTd>
                                </Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Lieu</Th>
                            <Th>Date du tournoi</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <tbody>
                        <H2 id="tournaments-list">Tournois</H2>
                        {tournaments.map((tournament, index) => ( 
                            <Tr key={index}>
                                <Td>{ tournament.name } { tournament.city } ({ tournament.zipcode })</Td>
                                <Td>{ new Date(tournaments.date).toLocaleDateString("fr-FR") }</Td>
                                <Td>
                                <ActionTd>
                                        <Button key={tournament.id}>Supprimer</Button>
                                    </ActionTd>
                                    <ActionTd>
                                        <Button key={tournament.id}>Modifier</Button>
                                    </ActionTd>
                                </Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        </Section>
    )
};

export async function getServerSideProps() {
    
    const [bars] = await database.query(`SELECT * FROM bar`)
    const [users] = await database.query(`SELECT * FROM user`);
    const [tournaments] = await database.query(`
        SELECT * FROM tournament 
        JOIN bar
        ON bar.id = tournament.id_bar
    `)
    
    return {
        props: {
            bars: serializedDate(bars), 
            users: serializedDate(users),
            tournaments: serializedDate(tournaments),
        },
    };
}
