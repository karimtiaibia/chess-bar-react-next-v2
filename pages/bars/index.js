import Bars from "../components/Bars";
import database from "@/_database";
import serializedDate from "@/lib/serializeDate";
export const Metadata = {
    title: 'S\'inscrire',
};

export default function Bar({ user, bars, tournaments, ranking, userSession }) {
    return (
        <>
            <Bars id={user} bars={bars} tournaments={tournaments} ranking={ranking} userSession={userSession} />
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`/bars/${params.id}`);
    const user = await res.json();

    if (!user) {
        return {
            notFound: true,
        };
    }

    return {
        props: { user }, // Will be passed to the page component as props
    };
}
