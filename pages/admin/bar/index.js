import { Section } from "@/pages/components/common/Section";
import { Button } from "@/pages/components/common/Button";
import {
    H1, 
    Form,
    Label,
    Input,
    FileInput,
} from "../../../pages/components/common/Typefaces"

export default function AddBar() {
    return (
        <Section>
            <H1>Ajouter un bar</H1>
            <Form action="/admin/bar/add" method="POST" encType="multipart/form-data">
                <Label htmlFor="barName">Nom du bar :</Label>
                <Input
                    type="text"
                    required
                    id="barName"
                    name="barName"
                    placeholder="Nom du bar"
                />
                <Label htmlFor="address">Adresse :</Label>
                <Input
                    type="text"
                    required
                    id="address"
                    name="address"
                    placeholder="Adresse du bar"
                />
                <Label htmlFor="zipcode">Code postal :</Label>
                <Input
                    type="text"
                    required
                    id="zipcode"
                    name="zipcode"
                    placeholder="Code postal"
                />
                <Label htmlFor="city">Ville :</Label>
                <Input
                    type="text"
                    required
                    id="city"
                    name="city"
                    placeholder="Ville"
                />
                <Label htmlFor="phoneNumber">N° de téléphone :</Label>
                <Input
                    type="tel"
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Numéro de téléphone"
                    pattern="[0-9]{10}"
                />
                <Label htmlFor="website">Site web :</Label>
                <Input
                    type="text"
                    id="website"
                    name="website"
                    placeholder="Lien du site web"
                />
                <Label htmlFor="instagram">Réseaux sociaux (Instagram) :</Label>
                <Input
                    type="text"
                    id="instagram"
                    name="instagram"
                    placeholder="Lien de la page Instagram"
                />
                <Label htmlFor="facebook">Réseaux sociaux (Facebook) :</Label>
                <Input
                    type="text"
                    id="facebook"
                    name="facebook"
                    placeholder="Lien de la page Facebook"
                />
                <Label htmlFor="logo">Logo :</Label>
                <FileInput
                    type="file"
                    id="logo"
                    name="imageFile"
                    accept="image/*"
                />
                <Button>Valider</Button>
            </Form>
        </Section>
    );
}
