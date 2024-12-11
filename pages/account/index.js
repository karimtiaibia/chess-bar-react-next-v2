import React, { useState } from "react";
import { Section } from "../components/common/Section";
import { Button } from "../components/common/Button";

export default function Account() {
    
    return (
        <Section>
            <h2>Profil</h2>

            <form action="/account/update" method="POST" >
                
                <label for="pseudo">Pseudo : </label>
                <input value="" id="pseudo" type="pseudo" name="pseudo" disabled />
                
                <label for="password">Mot de passe : </label>
                <input id="password" type="password" name="password" placeholder ="***" disabled />
                
                <label for="email">Email : </label>
                <input value="" id="email" type="email" name="email" />
                    
                <label for="city">Ville : </label>
                <input value="" id="city" type="text" name="city" />

                <Button>Mettre à jour mon compte</Button>
                
            </form>
        </Section>
    );
}
