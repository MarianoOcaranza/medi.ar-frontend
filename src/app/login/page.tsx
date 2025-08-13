import LoginForm from "@/components/login/LoginForm";
import Link from "next/link";
import React from "react";


const LoginPage: React.FC = () => {
    return (
        <main className='flex justify-center min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-64px)] items-center'>
            <LoginForm />
        </main>
    )
}


export default LoginPage;