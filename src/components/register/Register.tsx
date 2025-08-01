"use client";
import React, { useState, useEffect } from "react";
import { BriefcaseMedical, CircleUser, ArrowLeft} from "lucide-react";
import PersonalInfo from "./PersonalInfo";

const Register = () => {
	const [step, setStep] = useState(1);
	const [role, setRole] = useState("");
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		provincia: '',
		localidad: '',
		phone: '',
		matriculaNac: '',
		matriculaProv: '',
		specialty: '',
		modalidad: ''
	})

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		setFormData((prev => ({
			...prev,
			[name]: value,
			})
		))
	}

	
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(formData);
	}
	
	const cancelForm = () => {
		setStep(1);
		setRole("");
		setFormData({
			username: '',
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			provincia: '',
			localidad: '',
			phone: '',
			matriculaNac: '',
			matriculaProv: '',
			specialty: '',
			modalidad: ''
		})
	}


  	return (
    <>
		{/* Step 1: SELECT USER TYPE (Professional or patient) */}
		{step == 1 && (
			<div className="bg-white shadow-md gap-3 p-4 rounded-md w-[90%] md:w-3/4 flex flex-col text-center">
				<h1 className='text-xl tracking-tighter font-extralight'>Por favor, seleccione una opción</h1>
				<div className='flex justify-around'>
					<div onClick={()=> {setRole("PROFESIONAL"); setStep(2)}} className='rounded-sm border hover:bg-violet-300 transition-color duration-300 cursor-pointer border-neutral-300 p-10 flex w-[49%] flex-col items-center'>
						<div className='bg-violet-200 p-3 rounded-full'>
							<BriefcaseMedical size={50} color={'#7e22ce'}/>
						</div>
						<h1>Registrarse como <b>PROFESIONAL</b></h1>
					</div>
					<div onClick={()=> {setRole("PACIENTE"); setStep(2)}} className='rounded-sm border hover:bg-blue-200 transition-color duration-300 cursor-pointer border-neutral-300 p-10 flex w-[49%] flex-col items-center'>
						<div className='bg-blue-100 p-3 rounded-full'>
							<CircleUser size={50} color={'#7a70ff'}/>
						</div>
						<h1>Registrarse como <b>PACIENTE</b></h1>
					</div>
				</div>
			</div>
		)}

		{/* Step 2: Personal information form */}
		{step == 2 && (
			<form 
				className={
					`shadow-lg rounded-xl p-6 w-[90vw] md:w-1/2 flex gap-4 flex-col border
					${role == 'PROFESIONAL' ? 'border-violet-600/50 bg-violet-100' : 'border-blue-300 bg-blue-100'}`
				}
				onSubmit={(e)=>{e.preventDefault; setStep(3);}}
			>
				<ArrowLeft 
					className={
						`cursor-pointer 
						${role == 'PROFESIONAL' ? 'text-violet-500 hover:text-violet-700' : 'text-blue-500 hover:text-blue-800'} transition-colors`
					} 
					onClick={cancelForm}
				/>

				<PersonalInfo 
					role={`${role == 'PROFESIONAL' ? 'profesional' : 'paciente'}`} 
					textColor={`${role == 'PROFESIONAL' ? 'text-violet-700' : 'text-blue-800'}`} 
					borderColor={`${role == 'PROFESIONAL' ? 'border-violet-300' : 'border-blue-300'}`}
					onChange={handleChange}
					username={formData.username}
					email={formData.email}
					firstName={formData.firstName}
					lastName={formData.lastName}
					provincia={formData.provincia}
					localidad={formData.localidad}
				/>
				
				<button
					className={`p-2 ${role == 'PROFESIONAL' ? 'bg-indigo-500 hover:bg-indigo-700' : 'bg-emerald-400 hover:bg-emerald-600'}  text-white font-semibold rounded-md shadow-md transition-colors duration-300`}
					type="submit">
					Siguiente
				</button>
			</form>
		)}
		{step == 3 && (
			<>
			<form 
				className={
					`shadow-lg items-center rounded-xl p-6 w-[90vw] md:w-1/2 flex gap-4 flex-col border
					${role == 'PROFESIONAL' ? 'border-violet-600/50 bg-violet-100' : 'border-blue-300 bg-blue-100'}`
				}
				onSubmit={handleSubmit}
				>
				<ArrowLeft 
					className={
						`cursor-pointer 
						${role == 'PROFESIONAL' ? 'text-violet-500 hover:text-violet-700' : 'text-blue-500 hover:text-blue-800'} transition-colors`
					} 
					onClick={() => { setStep(2) }}
				/>
				{role == "PACIENTE" && (
					<div className="flex flex-col justify-center w-1/2">
						<label htmlFor="phone" className={`font-extralight`}>(OPCIONAL) ¿Te gustaría agregar un teléfono?</label>
						<input
							type="tel"
							autoComplete="off"
							name="phone"
							id="phone"
							placeholder="Ej: CABA, Merlo, etc..."
							onChange={handleChange}
							className={`border bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
						/>
					</div>
				)}
				<button
					className={`p-2 ${role == 'PROFESIONAL' ? 'bg-indigo-500 hover:bg-indigo-700' : 'bg-emerald-400 hover:bg-emerald-600'}  text-white font-semibold rounded-md shadow-md transition-colors duration-300`}
					type="submit">
					Finalizar
				</button>
			</form>
			</>
		)}
	</>
  	);	
};

export default Register;
