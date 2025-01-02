"use server";

import { z } from "zod";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

const testUser = {
    id: "1",
    email: "contact@chessbar.fr",
    password: "coucou",
};

const loginSchema = z.object({
    email: z.string().email({ message: "Adresse mail invalide !" }).trim(),
    password: z
        .string()
        .min(8, { message: "Le mot de passe doit comprendre au moins 8 caractères." })
        .trim(),
});

export async function login(prevState, formData) {
    const result = loginSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        };
    }

    const { email, password } = result.data;

    if (email !== testUser.email || password !== testUser.password) {
        return {
            errors: {
                email: ["Adresse email ou mot de passe invalides."],
            },
        };
    }

    await createSession(testUser.id);

    redirect("/dashboard");
}

export async function logout() {
    await deleteSession();
    redirect("/login");
}