

import { Section } from "../components/common/Section";
import { H1, Form, Label, Input } from "../components/common/Typefaces";
import { Button } from "../components/common/Button";

export default function Account() {
    return (
        <Section>
            <H1>Modifier le profil</H1>
            <Form action="/account/update" method="POST">
                <div className="form-group">
                    <Label htmlFor="pseudo">Pseudo :</Label>
                    <Input 
                        id="pseudo" 
                        type="text" 
                        name="pseudo" 
                        value="" 
                        disabled 
                        aria-disabled="true" 
                    />
                </div>

                <div className="form-group">
                    <Label htmlFor="password">Mot de passe :</Label>
                    <Input 
                        id="password" 
                        type="password" 
                        name="password" 
                        placeholder="***" 
                        disabled 
                        aria-disabled="true" 
                    />
                </div>

                <div className="form-group">
                    <Label htmlFor="email">Email :</Label>
                    <Input 
                        id="email" 
                        type="email" 
                        name="email" 
                        value="" 
                        placeholder="Votre adresse email" 
                    />
                </div>

                <div className="form-group">
                    <Label htmlFor="city">Ville :</Label>
                    <Input 
                        id="city" 
                        type="text" 
                        name="city" 
                        value="" 
                        placeholder="Votre ville" 
                    />
                </div>

                <Button type="submit">Mettre à jour mon compte</Button>
            </Form>
        </Section>
    );
}
