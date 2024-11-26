// 'use client'

import bcrypt from 'bcrypt'
import { z } from "zod"
import { v4 as uuidv4 } from "uuid"

const RegisterUser = z.object({
    name: z.string({
        invalid_type_error: 'Veuillez entrer votre pseudo.',
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

export default async function register(
        prevState,
        formData,
    ) {

    const validatedFields = RegisterUser.safeParse({
        name: formData.get('nom'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('password-confirm'),
    })

    // Si la validation échoue, cela retourne le message d'erreur au début. Sinon, ça déroule.
    if (!validatedFields.success) {
        return "Un ou plusieurs champs sont manquants. Création du compte échouée."
    }

    const { name, email, password, confirmPassword } = validatedFields.data

    // Check if passwords match
    if (password !== confirmPassword) {
        return "Le mot de passe ne correspond pas."
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const id = uuidv4()

    try {
        await sql`
            INSERT INTO user (id, nom, email, password)
            VALUES (${id}, ${name}, ${email}, ${hashedPassword})
        `
        } catch (error) {
            return "Erreur de la base de données: Création du compte échouée."
    }

    redirect('/register')
}