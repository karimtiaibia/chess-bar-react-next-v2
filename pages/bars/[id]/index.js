import Image from "next/image";

import database from "@/_database";
import serializedDate from "@/lib/serializeDate";

import { Section } from "@/pages/components/common/Section";
import { H1 } from "@/pages/components/common/Typefaces";

import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Bar({ bar, tournaments }) {
    
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
                                <i className="fas fa-file-alt"></i> Inscrit depuis le{' '}
                                {new Date(bar.register_date).toLocaleDateString('fr-FR')}
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
                </Section>
                <p>
                    Il reste{' '}
                    {Math.ceil((new Date(bar.end_of_season).getTime() - new Date().getTime()) / 86400000)} jours
                    avant la fin de la saison.
                </p>

                <div className="next-tournaments">
                    <H1>Prochains Tournois</H1>
                    {/* {tournaments.map((tournament) => (
                        <Section key={tournament.id} className="tournaments">
                            <div>
                                <img src={`../img/${tournament.logo}`} alt="Logo du tournoi" />
                            </div>
                            <H1>
                                {tournament.name} - {tournament.city}
                            </H1>
                            <H1>{new Date(tournament.date).toLocaleDateString('fr-FR')}</H1>
                            <H1>{tournament.description}</H1>
                        </Section>
                    ))} */}
                </div>

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
                            {/* {ranking.map((rank, i) => (
                                <tr key={rank.id}>
                                    <td>{i + 1}</td>
                                    <td>{rank.pseudo}</td>
                                    <td>{rank.score}</td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                </Section>
            </Section>
        </Section>
    );
}

export async function getServerSideProps(context) {
    const id = context.params.id;
    console.log("ID reçu :", id);

    const [bar] = await database.query(`
        SELECT * FROM bar
        WHERE id = ?
    `, [id]);
    console.log("Résultat de la requête :", bar);

    if (!bar.length) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            bar: serializedDate(bar),
        },
    };
}
