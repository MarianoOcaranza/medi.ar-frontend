"use client";
import React, { useEffect, useState } from "react";
import { BriefcaseMedical, CircleUser, ArrowLeft} from "lucide-react";
import PersonalInfo from "./PersonalInfo";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAuthStore } from "@/store/authStore";

const Register = () => {
	const router = useRouter();
	const {isLogged, loading, error, registerPatient, registerProfessional} = useAuthStore();
	const [step, setStep] = useState(1);
	const [role, setRole] = useState("");
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
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

	useEffect(()=> {
		if (isLogged) {
			router.replace('/'); 
		}
	}, [isLogged, router])

	const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		setFormData((prev => ({
			...prev,
			[name]: value,
			})
		))
	}

	const validateForm = ()=> {
		formData.username = formData.username.trim();
		formData.firstName = formData.firstName.trim();
		formData.lastName = formData.lastName.trim();
		formData.provincia = formData.provincia.trim();
		formData.localidad = formData.localidad.trim();

		if(formData.username.length < 4) {
			toast.error("El nombre de usuario es muy corto");
			return false;
		}
		if (formData.password.length < 8) {
			toast.error("La contraseña debe tener al menos 8 caracteres");
			return false;
		}
		if(formData.confirmPassword !== formData.password) {
			toast.error("Las contraseñas no coinciden");
			return false;
		}

    	if (!/[A-Z]/.test(formData.password) || !/[0-9]/.test(formData.password)) {
			toast.error("La contraseña debe tener al menos una mayúscula y un número");
			return false;
		}
		return true;
	}

	const handleNextStep = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if(!validateForm()) return;

		console.log(formData)
		setStep(3);
	}
	
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			if (role == "PACIENTE") {
				await registerPatient(formData);
				clearForm();
				toast.success("¡Registro exitoso!")
				router.push("/login")
				
			} else if(role == "PROFESIONAL") {
				if(!/^\d{5,10}$/.test(formData.matriculaNac.trim())) {
					toast.error('La matricula no es válida')
					return;
				}
				await registerProfessional(formData);
				clearForm();
				toast.success("¡Registro exitoso!")
				router.push("/login");
			}
		} catch (err: any) {
			toast.error(err.response?.data?.message || "Error no controlado");
		}
	}
	
	const clearForm = () => {
		setStep(1);
		setRole("");
		setFormData({
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
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
					`shadow-lg rounded-xl p-4 mt-5 mb-5 w-[90vw] md:w-1/2 flex gap-4 flex-col
					bg-white`
				}
				onSubmit={handleNextStep}
			>
				<ArrowLeft 
					className={
						`cursor-pointer 
						${role == 'PROFESIONAL' ? 'text-violet-500 hover:text-violet-700' : 'text-blue-500 hover:text-blue-800'} transition-colors`
					} 
					onClick={clearForm}
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
							value={formData.phone}
							name="phone"
							id="phone"
							placeholder="Número de teléfono"
							onChange={handleChange}
							className={`border bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
						/>
					</div>
				)}
				{role == "PROFESIONAL" && (
					<>
						<label htmlFor="phone" className="text-sm font-medium">
						(OPCIONAL) ¿Te gustaría agregar un teléfono?
						</label>
						<input
						type="tel"
						value={formData.phone}
						autoComplete="off"
						name="phone"
						id="phone"
						placeholder="Número de teléfono"
						onChange={handleChange}
						className="w-full border border-gray-300 bg-white p-2 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
						/>

						<label htmlFor="matriculaNac" className="text-sm font-medium">
						(OBLIGATORIO) Matrícula Nacional
						</label>
						<input
						type="text"
						autoComplete="off"
						name="matriculaNac"
						value={formData.matriculaNac}
						id="matriculaNac"
						required
						placeholder="Número de matrícula"
						onChange={handleChange}
						className="w-full border border-gray-300 bg-white p-2 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
						/>

						<label htmlFor="matriculaProv" className="text-sm font-medium">
						(OPCIONAL) Matrícula Provincial
						</label>
						<input
						type="text"
						autoComplete="off"
						value={formData.matriculaProv}
						name="matriculaProv"
						id="matriculaProv"
						placeholder="Número de matrícula provincial"
						onChange={handleChange}
						className="w-full border border-gray-300 bg-white p-2 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
						/>

						<label htmlFor="specialty" className="text-sm font-medium">
						Especialidad
						</label>
						<input
						type="text"
						autoComplete="off"
						name="specialty"
						value={formData.specialty}
						id="specialty"
						placeholder="Ej: Psicología, Gastroenterología..."
						onChange={handleChange}
						className="w-full border border-gray-300 bg-white p-2 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
						required
						/>

						<label htmlFor="modalidad" className="text-sm font-medium">
						Modalidad de Atención
						</label>
						<select
						name="modalidad"
						id="modalidad"
						value={formData.modalidad}
						onChange={handleChange}
						className="w-full border border-gray-300 bg-white p-2 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
						required
						>
						<option value="" disabled>Seleccione una modalidad</option>
						<option value="PRESENCIAL">Presencial</option>
						<option value="VIRTUAL">Virtual</option>
						<option value="HIBRIDA">Híbrida</option>
						</select>
					</>
				)}
				<button 
                	className={`p-2 ${loading ? 'bg-neutral-600' : 'bg-indigo-400 hover:bg-indigo-600'} text-white rounded-sm transition-colors duration-300`}
                	type='submit'
                	disabled={loading ? true : false}
                	>
                    	{loading ? 'Cargando...' : 'Finalizar'}
            	</button>
			</form>
			</>
		)}
	</>
  	);	
};

export default Register;
