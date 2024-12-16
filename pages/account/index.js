import React, { useState } from "react";
import serializedDate from "@/lib/serializeDate";

import { Section } from "../components/common/Section";
import { Button } from "../components/common/Button";
import { H1, Form, Input, Label } from "../components/common/Typefaces";

export default function Account(userAccount) {
    
    return (
        <Section>
            <H1>Modifier le profil</H1>
            <Form action="/account/update" method="POST" >

                <Label for="pseudo">Pseudo : </Label>
                <Input value="" id="pseudo" type="pseudo" name="pseudo" disabled />
                
                <Label for="password">Mot de passe : </Label>
                <Input id="password" type="password" name="password" placeholder ="***" disabled />
                
                <Label for="email">Email : </Label>
                <Input value="" id="email" type="email" name="email" />
                    
                <Label for="city">Ville : </Label>
                <Input value="" id="city" type="text" name="city" />

                <Button>Mettre à jour mon compte</Button>
                
            </Form>
        </Section>
    );
}
