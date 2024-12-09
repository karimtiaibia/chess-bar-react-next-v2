import React from "react";
import Image from "next/image";
import * as _var from "../styles/variables";

import database from "@/_database";
import serializedDate from "@/lib/serializeDate";

import Searchbar, { Placeholder } from "./components/Searchbar";
import { Section } from "./components/common/Section";
import { H1 } from "./components/common/Typefaces";
import { Ul } from "./components/common/Ul";
import { Cards, Card } from "./components/Searchbar";

export default function Home({ data, users }) {
    
    return (
        <>
            <Searchbar bars={data} />
            <Section>
                <H1>ChessBar comment ça marche ?</H1>
                <Ul>
                    <li>
                        1. Je m’inscris gratuitement en remplissant le formulaire
                        disponible&nbsp;
                        <a href="register">ici</a>.
                    </li>
                    <li>
                        2. Je suis intégré au WhatsApp de ma ville pour m’inscrire aux
                        différents tournois hebdomadaires. (6 places/tournoi)
                    </li>
                    <li>
                        3. Je participe à un tournoi hebdomadaire dans un bar partenaire
                        près de chez moi et je marque des points en fonction de mes
                        résultats. (voir <a href="tournaments">Tournois à venir</a>)
                    </li>
                    <li>
                        4. Tous les 3 mois, les vainqueurs de chaque bar s’affrontent et
                        tentent de se qualifier pour la finale annuelle qui désignera le
                        nouveau champion ChessBar !
                    </li>
                    <li>
                        N.B: Les parties se jouent en cadence rapide (10 minutes/joueur). Un
                        tournoi dure en général 2 heures.
                    </li>
                </Ul>
            </Section>
            <Section>
                <h2>Nos Partenaires</h2>
                <Cards>
                    <Card>
                        <a href="https://www.krcimmo.fr/">
                            <Placeholder>
                                <Image
                                    src="/img/krc-logo-small.jpg"
                                    fill
                                    size="auto"
                                    priority={false}
                                    alt="Logo de l'entreprise KRC" 
                                />
                            </Placeholder>
                        </a>
                    </Card>
                    <Card>
                        <>
                            <a href="https://www.les-ptitsmatelots.fr/">
                                <Placeholder>
                                    <Image
                                        src="/img/lpm-logo.png"
                                        fill
                                        size="auto"
                                        priority={false}
                                        alt="Logo de l'entreprise Les Ptits Matelots" 
                                    />
                                </Placeholder>
                            </a>
                        </>
                    </Card>
                </Cards>
            </Section>
        </>
    );
    
}

export async function getServerSideProps() {
    const [bars] = await database.query(`SELECT * FROM bar`);
    const [users] = await database.query(`SELECT * FROM user`);
    
    return {
        props: {
            data: serializedDate(bars), 
            users: serializedDate(users),

        },
    };
}
