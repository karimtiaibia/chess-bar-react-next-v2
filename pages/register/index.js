import RegisterForm from '../components/common/RegisterForm';
import Link from 'next/link'

export const Metadata = {
    title: 'S\'inscrire',
};

export default function Login() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <RegisterForm />
            </div>
        </main>
    );
}