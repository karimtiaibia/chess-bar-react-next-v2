import React from "react";
import * as _var from "../styles/variables";

import database from "@/_database";
import serializedDate from "@/lib/serializeDate";

import { Section } from "./components/common/Section";
import { Ul } from "./components/common/Ul";
import { H1 } from "./components/common/Typefaces";
import Searchbar from "./components/Searchbar";

export default function Home({ data }) {
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
            {/* <Section>
                <h2>Nos Partenaires</h2>
                <div>
                    <Card>
                        <a href="https://www.krcimmo.fr/">
                            <Image
                                src="/img/krc-logo-small.jpg"
                                width={500}
                                height={400}
                                alt="Logo de l'entreprise KRC"
                            />
                        </a>
                    </Card>
                    <div>
                        <a href="https://www.les-ptitsmatelots.fr/">
                            <Image
                                src="/img/lpm-logo.png"
                                width={500}
                                height={400}
                                alt="Logo de l'entreprise Les Ptits Matelots"
                            />
                        </a>
                    </div>
                </div>
            </Section> */}
        </>
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
