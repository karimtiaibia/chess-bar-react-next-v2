import React from "react"

import { H1 } from "../components/common/Typefaces"
import { Section } from "../components/common/Section"

export default function Tournaments() {
    return (
        <Section>
            <div className="next-tournaments">
                <H1>Prochains Tournois</H1>
                <label htmlFor="city-select"></label>
                <select aria-label="Sélécteur de villes" name="city-select" id="city-select">
                    <option selected value="">-- Sélectionnez une ville --</option>
                    {/* <% for (city of city) { %> */}
                        {/* <option value='<%= city.city %>'><%= city.city %></option> */}
                    {/* <% } %> */}
                </select>

                {/* <% for (tournament of tournament) { %> */}
                    <section className="tournaments">
                        <div>
                            <img src=""></img>
                        </div>
                        {/* <h2><a href="/bars/<%=tournament.id%>"><%= tournament.name %> <%= " - " %> <%= tournament.city %></a></h2> */}
                        {/* <h3><%= new Date(tournament.date).toLocaleDateString('fr-FR') %></h3> */}
                        {/* <h4><%= tournament.description %></h4> */}
                    </section>
                {/* <% } %> */}
            </div>
        </Section>
    )
};
