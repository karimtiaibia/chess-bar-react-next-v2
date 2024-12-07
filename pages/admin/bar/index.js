import React from "react";

import { H1 } from "@/pages/components/common/Typefaces";
import { Section } from "@/pages/components/common/Section";

export default function adminBar () {
    

    return (
        <Section>
            <H1>Créer un nouveau bar</H1>

            <form action="/admin/bar/add" method="POST" enctype="multipart/form-data">
                
                <label for="barName">Nom du bar : </label>
                <input type="text" required id="barName" name="barName" placeholder="Nom du bar" />
                
                <label for="address">Adresse : </label>
                <input type="text" required id="address" name="address" placeholder="Adresse du bar" />

                <label for="zipcode">Code postal : </label>
                <input type="text" required id="zipcode" name="zipcode" placeholder="Code postal" />

                <label for="city">Ville : </label>
                <input type="text" required id="city" name="city" placeholder="Ville" />
                
                <label for="phoneNumber">N° de téléphone : </label>
                <input type="tel" required id="phoneNumber" name="phoneNumber" placeholder="Numéro de téléphone" pattern="[0-9]{10}" />

                <label for="website">Site web : </label>
                <input type="text" id="website" name="website" placeholder="Lien du site web" />

                <label for="instagram">Réseaux sociaux (Instagram) : </label>
                <input type="text" id="instagram" name="instagram" placeholder="Lien de la page Instagram" />

                <label for="facebook">Réseaux sociaux (Facebook) : </label>
                <input type="text" id="facebook" name="facebook" placeholder="Lien de la page Facebook" />

                <label for="imageFile">Logo : </label>
                <input type="file" id="logo" name="imageFile" placeholder="Logo du bar" accept="image/*" />

                <button type="submit">Valider</button>
            </form>
        </Section>
    )
}