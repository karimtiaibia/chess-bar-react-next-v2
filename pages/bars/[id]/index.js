import Image from "next/image";
import database from "@/_database";
import serializedDate from "@/lib/serializeDate";
// Auth middlewares
import { isConnected } from "@/_middlewares";
// Style
import { Section } from "@/pages/components/common/Section";
import { H1 } from "@/pages/components/common/Typefaces";
import { Button } from "@/pages/components/common/Button";
// Icons
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

export default function Bar({ bar, barTournaments, ranking }) {
    
    return (
        /* Rendu unique pour chaque bar en fonction de l'id */
        <Section>
            <Section className="bar-details">
                <Section className="bar-info">
                    <Image
                        src={`/img/${bar[0].logo}`}
                        width={200}
                        height={200}
                        alt={`Logo du bar ${bar[0].name}`}
                    />
                    <div className="bar-container">
                        <div className="info-container">
                            <H1>Inscrit depuis le{` ${new Date(bar[0].register_date).toLocaleDateString('fr-FR')}`}</H1>
                            <div className="adress">
                                <H1>{bar[0].adress}, {bar[0].zipcode}, {bar[0].city}</H1>
                            </div>
                            <H1>{bar[0].phone_number}</H1>
                            {(bar[0].website || bar[0].sm_fb || bar[0].sm_inst) && (
                                <div className="social">
                                    {bar[0].website && (
                                        <H1>
                                            <CiGlobe />
                                            <a href={bar[0].website} target="_blank" rel="noopener noreferrer">
                                                Site web
                                            </a>
                                        </H1>
                                    )}
                                    {bar[0].sm_fb && (
                                        <H1>
                                            <FaFacebook />
                                            <a href={bar[0].sm_fb} target="_blank" rel="noopener noreferrer">
                                                Page Facebook
                                            </a>
                                        </H1>
                                    )}
                                    {bar[0].sm_inst && (
                                        <H1>
                                            <FaInstagram />
                                            <a href={bar[0].sm_inst} target="_blank" rel="noopener noreferrer">
                                                Page Instagram
                                            </a>
                                        </H1>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <p>
                        Il reste {Math.ceil((new Date(bar[0].end_of_season).getTime() - new Date().getTime()) / 86400000)} jours avant la fin de la saison.
                    </p>
                </Section>
                <Section className="next-tournaments">
                    <H1>Prochains Tournois</H1>
                    {/* Pour chaque tournoi du bar (limité à deux) */}
                    {barTournaments.map((tournament) => (
                        <Section className="tournaments">
                            <Image
                                src={`/img/${tournament.logo}`}
                                width={100}
                                height={100}
                                alt={`Logo du bar ${tournament.name}`}
                            />
                            <h2>{ tournament.name } { tournament.city }</h2>
                            <h3>{ new Date(tournament.date).toLocaleDateString('fr-FR') }</h3>
                            <h4>{ tournament.description }</h4>
                            {isConnected ? (
                                <div>
                                    <h4>{ tournament.nb_places_disponibles } { " places disponibles "}</h4>
                                    <form   //action={`/bar/${ bar.id }/${ tournament.id }/${ locals.session.user.id }/registered`} 
                                            onsubmit="return confirm(`Êtes-vous sûr de vouloir vous inscrire à ce tournoi ?`)"
                                            method="POST">
                                        <Button type="submit" className="tournament-registered buttoncheck">S'inscrire</Button>
                                    </form>
                                </div>
                            ) : (
                                <div>
                                    <h4>{ tournament.nb_places_disponibles } { " places disponibles " }</h4>
                                    <h4>Vous devez vous connecter pour vous inscrire au tournoi.</h4>
                                </div>
                            )}
                        </Section>
                    ))}
                </Section>

                <Section className="rankings">
                    {ranking && ranking.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Place</th>
                                    <th>Nom</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ranking.map((rank, i) => (
                                    <tr key={rank.id}>
                                        <td>{i + 1}</td>
                                        <td>{rank.name}</td>
                                        <td>{rank.score}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="alert">
                            <p>Aucun score disponible pour l'instant.</p>
                        </div>
                    )}
                </Section>
            </Section>
        </Section>
    );
}

export async function getServerSideProps(context) {
    const barId = context.params.id;
    const [bar] = await database.query(`
        SELECT * FROM bar
        WHERE id = ?;
    `, [barId]);
    
    // Si aucun résultat n'est trouvé
    if (!bar || bar.length === 0) {
        return {
            notFound: true,
        };
    }

    const [barTournaments] = await database.query(`
        SELECT *, bar.name, tournament.id FROM tournament
        JOIN bar ON bar.id = tournament.id_bar
        WHERE id_bar = ?
        LIMIT 2;
    `, [barId]);
    
    const [ranking] = await database.query(`
        SELECT user.name AS name, SUM(ranking.score) AS score, ranking.id_user
        FROM ranking
        JOIN user ON user.id = ranking.id_user
        JOIN tournament ON tournament.id = ranking.id_tournament
        JOIN bar ON bar.id = tournament.id_bar
        WHERE bar.id = ?
        GROUP BY user.name, ranking.id_user
        ORDER BY score DESC
        LIMIT 14;
    `, [barId])

    console.log("Bar : ", bar[0])
    console.log("Tournois du bar : ", barTournaments)
    console.log("Classement : ", ranking)
    
    return {
        props: {
            bar: serializedDate(bar),
            barTournaments: serializedDate(barTournaments), 
            ranking: serializedDate(ranking),
        },
    };
}