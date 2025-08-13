"use client"
import { useAuthStore } from "@/store/authStore"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const LoginForm: React.FC = ()=> {
    const { login, error, loading } = useAuthStore();
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const router = useRouter()

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event)=> {
        event.preventDefault();
        const {name, value} = event.target;
        setFormData((prev => ({
			...prev,
			[name]: value,
			})
		))
    }
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await login(formData);
            setFormData({username: '', password: ''});
            setMessage("");
            router.push('/')
        } catch(err: any) {
            setMessage(err.response?.data?.message || "Por favor, provee credenciales válidas");
        }
    }

    return(
        <form 
            onSubmit={handleSubmit}
            className="shadow-md rounded-lg p-6 w-[90vw] md:w-1/2 lg:w-1/3 bg-white flex gap-5 flex-col">
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
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
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
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Ingrese su contraseña'
                    className='border border-neutral-400 bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none'
                />
            </div>
            {error ? 
                <>
                    <p className="text-red-600">{message}</p>
                </> : ""}
            <button 
                className={`p-2 ${loading ? 'bg-neutral-600' : 'bg-indigo-400 hover:bg-indigo-600'} text-white rounded-sm transition-colors duration-300`}
                type='submit'
                disabled={loading ? true : false}
                >
                    {loading ? 'Cargando...' : 'Login'}
            </button>
        </form>
    )
}


export default LoginForm