import { useEffect } from "react";
import { useRouter } from "next/router";
import { Section } from "../components/common/Section";

export default function Logout() {
    const router = useRouter();

    useEffect(() => {
        const performLogout = async () => {
            try {
                // Appeler une API pour supprimer le cookie côté serveur
                const response = await fetch("/api/logout", {
                    method: "POST",
                });

                if (response.ok) {
                    // Redirection vers la page d'accueil après déconnexion
                    router.push("/");
                } else {
                    console.error("Erreur lors de la déconnexion");
                }
            } catch (error) {
                console.error("Erreur réseau lors de la déconnexion", error);
            }
        };

        performLogout();
    }, [router]);

    return (
        <Section>
            <h1>Déconnexion...</h1>
            <p>Vous allez être redirigé.</p>
        </Section>
    );
}
