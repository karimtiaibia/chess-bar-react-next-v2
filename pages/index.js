'use client'
import { Section } from "./components/common/Section";
import Image from "next/image";
import Searchbar from "./components/Searchbar";

export default function Home() {
    return (
        <>
            <Searchbar />
            <Section className="home-page-welcome">
                <Image 
                    src="/img/header.png" 
                    width={350}
                    height={150}
                    alt="Bannière du site Chess Bar" 
                />
                <h1>ChessBar comment ça marche ?</h1>
                <ul>
                    <li>1. Je m’inscris gratuitement en remplissant le formulaire disponible <a href="register">ici</a>.</li>
                    <li>2. Je suis intégré au WhatsApp de ma ville pour m’inscrire aux différents tournois hebdomadaires. (6 places/tournoi)</li>
                    <li>3. Je participe à un tournoi hebdomadaire dans un bar partenaire près de chez moi et je marque des points en fonction de mes résultats. (voir <a href="tournaments">Tournois à venir</a>)</li>
                    <li>4. Tous les 3 mois, les vainqueurs de chaque bar s’affrontent et tentent de se qualifier pour la finale annuelle qui désignera le nouveau champion ChessBar !</li>
                    <li>N.B: Les parties se jouent en cadence rapide (10 minutes/joueur). Un tournoi dure en général 2 heures.</li>                  
                </ul>
            </Section>
            <Section className="home-partners">
                <h2>Nos Partenaires</h2>
                <div className="home-partners-logos">
                    <div>
                        <a href="https://www.krcimmo.fr/">
                            <Image 
                                src="/img/krc-logo-small.jpg" 
                                width={500}
                                height={400}
                                alt="Logo de l'entreprise KRC" 
                            />
                        </a>
                    </div>
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
            </Section>
        </>
    );
}
