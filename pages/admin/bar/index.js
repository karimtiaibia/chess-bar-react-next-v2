import { Section } from "@/pages/components/common/Section";
import {
    Form,
    Label,
    Input,
    FileInput,
} from "../../../pages/components/common/Typefaces"
import { Button } from "@/pages/components/common/Button";

export default function AddBarForm() {
    return (
        <Section>
            <Form action="/admin/bar/add" method="POST" encType="multipart/form-data">
                <div>
                    <Label htmlFor="barName">Nom du bar :</Label>
                    <Input
                        type="text"
                        required
                        id="barName"
                        name="barName"
                        placeholder="Nom du bar"
                    />
                </div>

                <div>
                    <Label htmlFor="address">Adresse :</Label>
                    <Input
                        type="text"
                        required
                        id="address"
                        name="address"
                        placeholder="Adresse du bar"
                    />
                </div>

                <div>
                    <Label htmlFor="zipcode">Code postal :</Label>
                    <Input
                        type="text"
                        required
                        id="zipcode"
                        name="zipcode"
                        placeholder="Code postal"
                    />
                </div>

                <div>
                    <Label htmlFor="city">Ville :</Label>
                    <Input
                        type="text"
                        required
                        id="city"
                        name="city"
                        placeholder="Ville"
                    />
                </div>

                <div>
                    <Label htmlFor="phoneNumber">N° de téléphone :</Label>
                    <Input
                        type="tel"
                        required
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Numéro de téléphone"
                        pattern="[0-9]{10}"
                    />
                </div>

                <div>
                    <Label htmlFor="website">Site web :</Label>
                    <Input
                        type="text"
                        id="website"
                        name="website"
                        placeholder="Lien du site web"
                    />
                </div>

                <div>
                    <Label htmlFor="instagram">Réseaux sociaux (Instagram) :</Label>
                    <Input
                        type="text"
                        id="instagram"
                        name="instagram"
                        placeholder="Lien de la page Instagram"
                    />
                </div>

                <div>
                    <Label htmlFor="facebook">Réseaux sociaux (Facebook) :</Label>
                    <Input
                        type="text"
                        id="facebook"
                        name="facebook"
                        placeholder="Lien de la page Facebook"
                    />
                </div>

                <div>
                    <Label htmlFor="logo">Logo :</Label>
                    <FileInput
                        type="file"
                        id="logo"
                        name="imageFile"
                        accept="image/*"
                    />
                </div>

                <Button>Valider</Button>
            </Form>
        </Section>
    );
}
