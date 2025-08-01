import Link from "next/link";
import React from "react";

const LoginPage: React.FC = () => {
    return (
        <main className='flex justify-center min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-64px)] items-center'>
            <form className="shadow-md rounded-lg p-6 w-[90vw] md:w-1/2 lg:w-1/3 bg-white flex gap-5 flex-col">
                <h1 className='text-xl text-center font-extralight text-neutral-800'>
                    Medi.ar
                </h1>
                <h2 className='text-md text-center'>
                    Iniciar sesión
                </h2>
                <Link href='/register' className='text-sm self-start text-indigo-900'>
                    ¿No tenés cuenta? Registrate gratis
                </Link>
                <div className='flex flex-col'>
                    <label htmlFor="username" className='text-neutral-700'>
                        Nombre de usuario
                    </label>
                    <input 
                        type="text" 
                        id='username'
                        placeholder='Ingrese su nombre de usuario' 
                        className='border border-neutral-400 bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none'
                    />
                </div>
                <div className="flex flex-col">
                    <div className='flex justify-between'>
                        <label htmlFor="password" className='text-neutral-700'>
                            Contraseña
                        </label>
                        <p className='text-sm self-end text-indigo-900'>
                            Olvidé mi contraseña
                        </p>
                    </div>
                    <input 
                        type="password"
                        id="password"
                        placeholder='Ingrese su contraseña'
                        className='border border-neutral-400 bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none'
                    />
                </div>
                <button className='p-2 bg-indigo-400 hover:bg-indigo-600 text-white rounded-sm transition-colors duration-300' type='submit'>
                    Login
                </button>
            </form>
        </main>
    )
}


export default LoginPage;