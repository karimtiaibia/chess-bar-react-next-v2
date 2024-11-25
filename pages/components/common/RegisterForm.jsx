'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { register } from '@/lib/actions';
import { H1 } from './Typefaces';
import { Button } from './Button';
// Imported icons
import { CiUser, CiAt } from "react-icons/ci";
import { PiKey } from "react-icons/pi";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function RegisterForm() {
    const [errorMessage, setErrorMessage] = useFormState(null);
    const formAction = async (event) => { 
        event.preventDefault(); 
        try { 
            await register(event.target); 
        } catch (error) { 
            setErrorMessage(error.message); 
        } 
    };
    
    return (
        <form action={formAction} className="space-y-3">
            <div>
                <H1>
                    S'inscrire
                </H1>
                <div>
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="pseudo">
                            Pseudo
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="name"
                                type="text"
                                name="pseudo"
                                placeholder="Entrez votre pseudo"
                                required />
                            <CiUser />
                        </div>
                    </div>
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="email">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Entrez votre adresse email" 
                                required />
                            <CiAt />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required
                                minLength={6} />
                            <PiKey />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="confirm-password"
                                type="password"
                                name="confirm-password"
                                placeholder="Enter password"
                                required
                                minLength={6} />
                            <PiKey />
                        </div>
                    </div>
                </div>
                <RegisterButton />
                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true">
                    {errorMessage && (
                        <>
                            <AiOutlineExclamationCircle />
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
}

function RegisterButton() {
    const [pending, setPending] = useState(false);

    return (
        <Button className="mt-4 w-full" aria-disabled={pending}>
            Register
        </Button>
    );
}

