import React from "react";
import Image from "next/image";
import db from "@/_database";

export default function Searchbar({data}) { 
    console.log(data)
    return (
        <>
            <input id="searchbar" placeholder="Rechercher lieu, bar, ville..." /> 
            {data.map((bar) => (
                <div key={bar.id} className="searchbar-results">
                    <h1>{bar.name}</h1>
                    <a>
                        <Image 
                            src={(`/img/${bar.logo}`)}
                            width={150}
                            height={150}
                            alt={`Logo du bar ${bar.name}`} >
                        </Image>
                        <div className="searchbar-results-infos">
                            <h2>{bar.name}</h2>
                            <div className="searchbar-results-adress">
                                <h3>{bar.adress}</h3>
                                <h3>{bar.zipcode}, " ", {bar.city}</h3>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </>
    )
}

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