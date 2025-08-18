"use client"

import React from "react";

const PersonalInfo = ({ 
		role,
	 	borderColor, 
		textColor,
		onChange,
		username,
		email,
		firstName,
		lastName,
		provincia,
		localidad,
	} : 
	{ 
		role: string,
		borderColor: string, 
		textColor: string,
		onChange: React.ChangeEventHandler<HTMLInputElement>,
		username: string,
		email: string,
		firstName: string,
		lastName: string,
		provincia: string,
		localidad: string,

	}) => {

	return (
		<>
			<h1 className={`text-xl text-center ${textColor}`}>
				Registrarse como {role}
			</h1>

			<div className="flex justify-between gap-3">
				<div className="flex flex-col w-1/2">
					<label htmlFor="username" className={`${textColor} font-extralight`}>Nombre de usuario</label>
					<input
						required
						autoComplete="on"
						type="text"
						id="username"
						name="username"
						value={username}
						placeholder="Nombre de usuario"
						onChange={onChange}
						className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`
					}
					/>
				</div>
				<div className="flex flex-col w-1/2">
					<label htmlFor="email" className={`${textColor} font-extralight`}>Email</label>
					<input
						required
						autoComplete="on"
						type="email"
						id="email"
						value={email}
						name="email"
						placeholder="Correo electrónico"
						onChange={onChange}
						className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
					/>
				</div>
			</div>

			<div className="flex flex-col">
				<label htmlFor="password" className={`${textColor} font-extralight`}>Contraseña</label>
				<input
					required
					type="password"
					id="password"
					name="password"
					placeholder="Ingrese su contraseña"
					onChange={onChange}
					className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
				/>
				<label htmlFor="confirm-password" className={`${textColor} font-extralight mt-2`}>Confirmar contraseña</label>
				<input
					required
					type="password"
					id="confirmPassword"
					name="confirmPassword"
					placeholder="Repita su contraseña"
					onChange={onChange}
					className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
				/>
			</div>

			<div className="flex justify-between gap-3">
				<div className="flex flex-col w-1/2">
					<label htmlFor="firstName" className={`${textColor} font-extralight`}>Nombre</label>
					<input
						required
						type="text"
						id="firstName"
						value={firstName}
						name="firstName"
						placeholder="Primer nombre"
						onChange={onChange}
						className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
					/>
				</div>
				<div className="flex flex-col w-1/2">
					<label htmlFor="lastName" className={`${textColor} font-extralight`}>Apellido</label>
					<input
						required
						type="text"
						id="lastName"
						value={lastName}
						name="lastName"
						placeholder="Apellido"
						onChange={onChange}
						className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
					/>
				</div>
			</div>

			<div className="flex justify-between gap-3">
				<div className="flex flex-col w-1/2">
					<label htmlFor="provincia" className={`${textColor} font-extralight`}>Provincia</label>
					<input
						type="text"
						name="provincia"
						id="provincia"
						value={provincia}
						placeholder="Ej: Buenos Aires"
						onChange={onChange}
						className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
					/>
				</div>
				<div className="flex flex-col w-1/2">
					<label htmlFor="localidad" className={`${textColor} font-extralight`}>Localidad</label>
					<input
						type="text"
						name="localidad"
						id="localidad"
						value={localidad}
						placeholder="Ej: CABA, Merlo, etc..."
						onChange={onChange}
						className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
					/>
				</div>
			</div>
		</>
	);
};

export default PersonalInfo;