"use client"

import { useSearchStore } from "@/store/searchStore"


const ProfessionalsList: React.FC = () => {
    const {professionals, loading} = useSearchStore()

    if(loading) {
        return (<>
            <p>Espera...</p>
        </>)
    }

    if(professionals.length === 0) {
        return (
            <>
                <p>No se encontró ningún profesional... por favor, realiza una búsqueda</p>
            </>
        )
    }

    return(
        <>
        <div className='flex flex-wrap justify-center items-center mt-4 gap-3'>
            {professionals.map((pro)=> ( 
                 // Esto lo tengo que cambiar si o si, la key tiene que ser el id del profesional      
                <div   
                    className='shadow p-4 cursor-pointer w-[300px] hover:scale-110 transition-all duration-300 bg-white rounded-sm' 
                    key={pro.email}>
                        <p className='text-xl font-bold text-neutral-700'>{pro.firstName} {pro.lastName}</p>
                        <p className='mb-5 text-neutral-700'>{pro.specialty} | M.N. {pro.matriculaNac}</p>
                        <p className='text-sm'>{pro.email} | {pro.phone}</p>
                        <p>{pro.provincia}, {pro.localidad}</p>
                </div>
            ))}
        </div>
        </>
    )
}

export default ProfessionalsList