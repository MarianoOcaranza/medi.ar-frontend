import SearchBar from "@/components/SearchBar"
import { CalendarCheck2, Search, User, UserRoundSearch } from "lucide-react"
import React from "react"

const Home: React.FC = ()=> {
    return (
        <>
			{/* Banner principal para busqueda de profesionales */}
			<main className="w-full px-4 py-30 md:py-50 gap-10 flex flex-col justify-center items-center bg-[url('/banner.png')] bg-[length:185%] md:bg-cover bg-no-repeat">
				<h1 className="md:text-4xl py-2 w-full text-xl font-extrabold tracking-tighter text-neutral-300 bg-gradient-to-r from-transparent via-black to-transparent text-center">
					Conectá al instante con el profesional que necesitás!
				</h1>
				<SearchBar />
			</main>
			{/* Seccion de tres cards informativas */}
			<article className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-4 py-10 bg-white">

				{/* Card 1 */}
				<div className="bg-white rounded-2xl shadow-xl p-6 max-w-full md:max-w-sm flex flex-col items-center text-center transition-transform hover:scale-105">
					<div className="bg-blue-100 p-4 rounded-full mb-4">
						<User size={40} className="text-blue-600" />
					</div>
					<h2 className="font-bold text-xl mb-2">
						Registrate
					</h2>
					<p className="mb-1">
						¿Buscás profesionales? Registrate como paciente y encontralos al instante.
					</p>
					<p>
						¿Sos profesional? Sumate a la plataforma y empezá a ofrecer tus servicios.
					</p>
				</div>

				{/* Card 2 */}
				<div className="bg-white rounded-2xl shadow-xl p-6 max-w-full md:max-w-sm flex flex-col items-center text-center transition-transform hover:scale-105">
					<div className="bg-green-100 p-4 rounded-full mb-4">
						<UserRoundSearch size={40} className="text-green-600" />
					</div>
					<h2 className="font-bold text-xl mb-2">
						Buscá y contactá
					</h2>
					<p className="mb-1">
						Encontrá al profesional ideal, con la especialidad que necesitás y cerca tuyo.
					</p>
					<p>
						Accedé a sus datos de contacto para una charla personalizada.
					</p>
				</div>

				{/* Card 3 */}
				<div className="bg-white rounded-2xl shadow-xl p-6 max-w-full md:max-w-sm flex flex-col items-center text-center transition-transform hover:scale-105">
					<div className="bg-purple-100 p-4 rounded-full mb-4">
						<CalendarCheck2 size={40} className="text-purple-600" />
					</div>
					<h2 className="font-bold text-xl mb-2">
						Agendá
					</h2>
					<p className="mb-1">
						Reservá un turno disponible desde la web.
					</p>
					<p>
						¿Sos profesional? Configurá tu disponibilidad como quieras, de forma 100% personalizada.
					</p>
				</div>	
			</article>
        </>
    )
}

export default Home