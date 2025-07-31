"use client"

const PersonalInfo = ({ role, borderColor, textColor }: { role: String, borderColor: String, textColor: String}) => {
	return (
		<>
			<h1 className={`text-xl font-extrabold text-center ${textColor}`}>
				Registrarse como {role}
			</h1>

			<div className="flex justify-between gap-3">
				<div className="flex flex-col w-1/2">
					<label htmlFor="username" className={`${textColor} font-medium`}>Nombre de usuario</label>
					<input
						type="text"
						id="username"
						placeholder="Nombre de usuario"
						className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
					/>
				</div>
				<div className="flex flex-col w-1/2">
					<label htmlFor="email" className={`${textColor} font-medium`}>Email</label>
					<input
						type="email"
						id="email"
						placeholder="Correo electrónico"
						className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
					/>
				</div>
			</div>

			<div className="flex flex-col">
				<label htmlFor="password" className={`${textColor} font-medium`}>Contraseña</label>
				<input
					type="password"
					id="password"
					placeholder="Ingrese su contraseña"
					className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
				/>
			</div>

			<div className="flex justify-between gap-3">
				<div className="flex flex-col w-1/2">
					<label htmlFor="firstName" className={`${textColor} font-medium`}>Nombre</label>
					<input
						type="text"
						id="firstName"
						placeholder="Primer nombre"
						className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
					/>
				</div>
				<div className="flex flex-col w-1/2">
					<label htmlFor="lastName" className={`${textColor} font-medium`}>Apellido</label>
					<input
						type="text"
						id="lastName"
						placeholder="Apellido"
						className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
					/>
				</div>
			</div>

			<div className="flex justify-between gap-3">
				<div className="flex flex-col w-1/2">
					<label htmlFor="provincia" className={`${textColor} font-medium`}>Provincia</label>
					<input
						type="text"
						id="provincia"
						placeholder="Ej: Buenos Aires"
						className={`border ${borderColor} bg-white p-2 text-sm rounded-md shadow-sm focus:ring-2 focus:ring-current focus:outline-none`}
					/>
				</div>
				<div className="flex flex-col w-1/2">
					<label htmlFor="localidad" className={`${textColor} font-medium`}>Localidad</label>
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