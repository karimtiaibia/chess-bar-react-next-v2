import Image from "next/image";
import database from "@/_database";

import { Section } from "@/pages/components/common/Section";
import { H1 } from "@/pages/components/common/Typefaces";

import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Bar({ bar, barTournaments, ranking }) {
    
    return (
        <Section>
            <Section className="bar-details">
                <Section className="bar-info">
                    <Image
                        src={`/img/${bar.logo}`}
                        fill
                        size="auto"
                        priority={false}
                        alt={`Logo du bar ${bar.name}`}
                    />
                    <div className="bar-container">
                        <div className="info-container">
                            <H1>
                                <i className="fas fa-file-alt"></i> 
                                Inscrit depuis le{` ${new Date(bar.register_date).toLocaleDateString('fr-FR')}`}
                            </H1>
                            <div className="adress">
                                <H1>
                                    <i className="fas fa-map"></i> {bar.address}
                                </H1>
                                <H1>
                                    {bar.zipcode} {bar.city}
                                </H1>
                            </div>
                            <H1>
                                <i className="fas fa-phone-alt"></i> {bar.phone_number}
                            </H1>
                            {(bar.website || bar.sm_fb || bar.sm_inst) && (
                                <>
                                    {bar.website && (
                                        <H1>
                                            <a href={bar.website} target="_blank" rel="noopener noreferrer">
                                                Site web
                                            </a>
                                        </H1>
                                    )}
                                    {bar.sm_fb && (
                                        <H1>
                                            <FaFacebook />{' '}
                                            <a href={bar.sm_fb} target="_blank" rel="noopener noreferrer">
                                                Page Facebook
                                            </a>
                                        </H1>
                                    )}
                                    {bar.sm_inst && (
                                        <H1>
                                            <FaInstagram />{' '}
                                            <a href={bar.sm_inst} target="_blank" rel="noopener noreferrer">
                                                Page Instagram
                                            </a>
                                        </H1>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                    <p>
                        Il reste{' '}
                        {Math.ceil((new Date(bar.end_of_season).getTime() - new Date().getTime()) / 86400000)} jours
                        avant la fin de la saison.
                    </p>
                </Section>
                <Section className="next-tournaments">
                    <H1>Prochains Tournois</H1>
                    {barTournaments.map((tournament) => (
                        <Section className="tournaments">
                            <div>
                                <Image 
                                    src={`/img/${ tournament.logo }`}
                                />
                            </div>
                            <h2>{ tournament.name } { tournament.city }</h2>
                            <h3>{ new Date(tournament.date).toLocaleDateString('fr-FR') }</h3>
                            <h4>{ tournament.description }</h4>
                            {/* {isConnected ? (
                                <div>
                                    <h4>{ tournament.nb_places_disponibles } { " places disponibles "}</h4>
                                    <form   action={`/bar/${ bar.id }/${ tournament.id }/${ locals.session.user.id }/registered`} 
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
                            )} */}
                        </Section>
                    ))}
                </Section>

                <Section className="rankings">
                    <table>
                        <thead>
                            <tr>
                                <th>Place</th>
                                <th>Pseudo</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ranking.map((rank, i) => (
                                <tr key={rank.id}>
                                    <td>{i + 1}</td>
                                    <td>{rank.pseudo}</td>
                                    <td>{rank.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Section>
            </Section>
        </Section>
    );
}

export async function getServerSideProps(context) {
    const barId = context.params.id;
    //console.log("ID du bar :", barId);

    const [bar] = await database.query(`
        SELECT * FROM bar
        WHERE id = ?
    `, [barId]);
    //console.log(`Bar avec l'ID ${barId} : `, bar);
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
        LIMIT 2
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
    JSON.stringify(bar, barTournaments, ranking)
    console.log("Bar : ", bar)
    console.log("Tournois du bar : ", barTournaments)
    console.log("Classement : ", ranking)
    return {
        props: {
            bar, barTournaments, ranking
        },
    };
}
