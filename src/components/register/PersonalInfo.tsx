"use client"

const PersonalInfo = ({ role, borderColor, textColor } : { role: String, borderColor: String, textColor: String}) => {
	return (
		<>
			<h1 className={`text-xl font-medium text-center ${textColor}`}>
				Registrarse como {role}
			</h1>

			<div className="flex justify-between gap-3">
				<div className="flex flex-col w-1/2">
					<label htmlFor="username" className={`${textColor} font-extralight`}>Nombre de usuario</label>
					<input
						required
						type="text"
						id="username"
						placeholder="Nombre de usuario"
						className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`
					}
					/>
				</div>
				<div className="flex flex-col w-1/2">
					<label htmlFor="email" className={`${textColor} font-extralight`}>Email</label>
					<input
						required
						type="email"
						id="email"
						placeholder="Correo electrónico"
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
					placeholder="Ingrese su contraseña"
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
						placeholder="Primer nombre"
						className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
					/>
				</div>
				<div className="flex flex-col w-1/2">
					<label htmlFor="lastName" className={`${textColor} font-extralight`}>Apellido</label>
					<input
						required
						type="text"
						id="lastName"
						placeholder="Apellido"
						className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
					/>
				</div>
			</div>

			<div className="flex justify-between gap-3">
				<div className="flex flex-col w-1/2">
					<label htmlFor="provincia" className={`${textColor} font-extralight`}>Provincia</label>
					<input
						type="text"
						id="provincia"
						placeholder="Ej: Buenos Aires"
						className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
					/>
				</div>
				<div className="flex flex-col w-1/2">
					<label htmlFor="localidad" className={`${textColor} font-extralight`}>Localidad</label>
					<input
						type="text"
						id="localidad"
						placeholder="Ej: CABA, Merlo, etc..."
						className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
					/>
				</div>
			</div>
		</>
	);
};

export default PersonalInfo;