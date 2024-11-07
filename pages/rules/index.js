import React from "react"
import { Section } from "../components/common/Section"
import { H1, H2 } from "../components/common/Typefaces"

export default function Rules() {
    return (
        <Section className="rules">
            <Section>
                <H1>Article 1 : ORGANISATION</H1>
                <p>ChessBar organise des tournois d’échecs hebdomadaires gratuits et tous niveaux dans des bars de France. Durant une saison de 3 mois, les joueurs jouent dans les bars partenaires chaque semaine et marquent des points en fonction de leur résultat. A l’issu des 3 mois, les joueurs ayant marqués le plus de points par bar s’affrontent et tentent de se qualifier pour la finale nationale qui aura lieu en Septembre 2024. La liste des bars partenaires est à retrouver sur la page Instagram ChessBar33.</p>
            </Section>
            <Section>
                <H1>Article 2 : REGLES</H1>
                <p>Les règles du jeu sont celles adoptées par le 93e Congrès de la FIDE qui s’est tenu à Chennai (Inde), entrées en vigueur le 1er janvier 2023. Seule la règle du « touché de la pièce » n’est pas pris en compte. C’est le « lâché de la pièce » qui importera.</p>
                <article>
                    <H2>2.1 INSCRIPTION</H2>
                    <p>6 joueurs maximum pourront s’inscrire dans un bar par session hebdomadaire.</p>
                </article>
                <article>
                    <H2>2.2 APPARIEMENTS</H2>
                    <p>Les 6 joueurs inscrits dans le bar partenaire s’affronteront entre eux pour un total de 5 parties par session. (cf staff du bar pour l’ordre des parties)</p>
                </article>
                <article>
                    <H2>2.3 CADENCE</H2>
                    <p>Les parties se jouent en 10 minutes/joueur sans incrément de temps, soit un maximum de 20 minutes par partie. En cas de temps dépassé, le joueur perd la partie.</p>
                </article>
                <article>
                    <H2>2.4 CLASSEMENT</H2>
                    <p>Le classement est établi au nombre de points de parties suivant le barème : gain de la partie = 100 points, partie nulle = 60 points, partie perdue = 20 points.          
                    En cas d’égalité à la fin de la session hebdomadaire, une partie blitz peut être organisée entre les deux premiers pour décider du vainqueur du jour (cf. bar partenaire). Les scores marqués par les joueurs se cumulent sur une période de 3 mois. Les scores marqués dans le bar A ne sont pas pris en compte dans le bar B. Néanmoins un joueur peut tout à fait jouer dans plusieurs établissements. A la fin des 3 mois, le joueur ayant cumulé le plus de points est désigné vainqueur du bar et se qualifie pour affronter les vainqueurs des autres bars partenaires. Le vainqueur des vainqueurs se qualifie pour la finale annuelle.</p>
                </article>
            </Section>
            <Section>
                <H1>ARTICLE 3 : PARTICIPANTS</H1>
                <article>
                    <H2>3.1 DROITS D’INSCRIPTIONS</H2>
                    <p>L’inscription est gratuite et accessible pour tous les niveaux. 6 places par session par établissement seront disponibles. Une liste d’attente sera créée le cas échéant. En cas de désistement, il est demandé aux joueurs de prévenir l’organisateur à minima 12h avant le début de la session afin que les joueurs sur liste d’attente puissent être contactés et participer. Un JOKER sera octroyé par joueur et par trimestre. Si deux désistements sans prévenir du même joueur interviennent durant le trimestre il ne pourra alors pas être prioritaire pour les prochaines inscriptions.</p>
                </article> 
                <article> 
                    <H2>3.2 COMPORTEMENT DES JOUEURS/JOUEUSES</H2>
                    <p>Les joueurs/joueuses s’engagent à conserver durant toute la période du tournoi un comportement fair-play envers les autres participants ainsi que le staff du bar partenaire. A la fin de chaque partie, le vainqueur inscrit le score sur la feuille remis par le barman/barmaid. En cas de match nul, c’est le joueur avec les blancs qui en est chargé. Les joueurs/joueuses acceptent d’être pris en photo/vidéo à tout moment de la partie. Ces données ne seront utilisées que par la société ChessBar pour ses réseaux sociaux et sa communication.</p>
                </article> 
                <article> 
                    <H2>3.3 RESPECT DU REGLEMENT</H2>
                    <p>Les joueurs s’engagent à respecter scrupuleusement ce règlement.</p>
                </article> 
            </Section>
            <Section>
                <H1>ARTICLE 4 : PRIX</H1>
                <article> 
                    <H2>4.1 ATTRIBUTION DES PRIX</H2>
                    <p>Les prix seront remis aux vainqueurs de chaque finale trimestrielle ainsi qu’au vainqueur de tous les établissements lors de la finale annuelle. Des consommations pourront être offertes au vainqueur de chaque session hebdomadaire. (cf. bar partenaire)</p>
                </article> 
                <article> 
                    <H2>4.2 LISTE DES PRIX</H2>
                    <p>La liste des prix pour les différents vainqueurs sera affichée sur la page Instagram ChessBar33.</p>
                </article> 
            </Section>
            <div className='card-footer'>
                <p>L’organisateur</p>
                <p>Kevin BENICHOU</p>
            </div>
        </Section>
    )
};
