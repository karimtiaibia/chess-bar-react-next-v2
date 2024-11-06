import db from "@/_database";

export default function Bars({data}) {
    console.log(data)
    return (
        <div>
            <h1>Liste des bars</h1>
            <ul>
                {data.map((bar) => (
                    <li key={bar.id}>{bar.name}</li>
                ))}
            </ul>
        </div>
    );
};

export async function getServerSideProps() {
    const [bars] = JSON.parse(JSON.stringify(
            await db.query(`SELECT * FROM bar`)
        )
    )
    return {
        props: {
            data: bars,
        },
    };
}