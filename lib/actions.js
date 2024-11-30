'use client'
const bcrypt = require('bcryptjs')
import { z } from "zod"
import { v4 as uuidv4 } from "uuid"


const RegisterUser = z.object({
    name: z.string({
        invalid_type_error: 'Veuillez entrer votre nom.',
    }),
    email: z.string({
        invalid_type_error: 'Veuillez entrer votre addresse email.',
    }),
    password: z.string({
        invalid_type_error: 'Veuillez entrer votre mot de passe.',
    }),
    confirmPassword: z.string({
        invalid_type_error: 'Veuillez confirmer votre mot de passe.',
    }),
})

async function register(
        prevState,
        formData,
    ) {

    const validatedFields = RegisterUser.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirm-password'),
    })

    // Si la validation échoue, cela retourne les erreur en amomnt. Sinon, ça continue.
    if (!validatedFields.success) {
        return "Champs manquants. Création du compte échouée."
    }

    const { name, email, password, confirmPassword } = validatedFields.data
    // Vérifie si les connées correspondent.
    if (password !== confirmPassword) {
        return "Le mot de passe ne correspond pas."
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const id = uuidv4()

    try {
        await sql`
            INSERT INTO user (id, name, email, password)
            VALUES (${id}, ${name}, ${email}, ${hashedPassword})
        `
        // Retourne les données après insertion.
        return (formData);
        console.log(formData);
        // Redirige vers la homepage.
        redirect('/');
        
        } catch (error) {
            console.error("Database error:", error)
            return "Erreur de la base de données. Création du compte échouée."
    }
}