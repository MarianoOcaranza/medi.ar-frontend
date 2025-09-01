"use client"

import { useSearchStore } from "@/store/searchStore"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react";


const ProfessionalsList: React.FC = () => {
    const searchParams = useSearchParams()
    const router = useRouter();
    const {search, professionals, totalPages, currentPage, loading} = useSearchStore()

    useEffect(()=> {
        const searchQuery = searchParams.get("search") || "";
        const page = parseInt(searchParams.get("page") || "0");
        search(searchQuery, page);
    }, [searchParams]);

    if(professionals.length === 0) {
        return (
            <>
            {loading ? 
                <p>Cargando...</p>
                :
                <p>No se encontró ningún profesional...</p>
            }
            </>
        )
    }

    const changePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());

        router.push(`/professionals?${params.toString()}`);
    };


    return(
        <>
        <p>Mostrando página {currentPage + 1} de {totalPages}</p>
        <div className='flex gap-2'>
            <button 
                onClick={()=> changePage(currentPage - 1)} 
                disabled={currentPage <= 0}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"> 
                    Página anterior
            </button>
            <button 
                onClick={()=> changePage(currentPage + 1)} 
                disabled={currentPage >= totalPages-1}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
                    Siguiente página
            </button>
        </div>

        <div className='flex flex-wrap justify-center items-center mt-4 gap-3'>
            {professionals.map((pro)=> ( 
                <div   
                    className='shadow p-4 cursor-pointer w-[350px] hover:scale-110 transition-all duration-300 bg-white rounded-sm' 
                    key={pro.id}>
                        <p className='text-xl font-bold text-neutral-700'>{pro.firstName} {pro.lastName}</p>
                        <p className='mb-5 text-neutral-700'>{pro.specialty} | M.N. {pro.matriculaNac}</p>
                        <p className='text-sm'>{pro.email} | {pro.phone}</p>
                        <p>{pro.provincia}, {pro.localidad}</p>
                </div>
            ))}
        </div>

        <div className='flex gap-2 mt-4 mb-4'>
            <button 
                onClick={()=> changePage(currentPage - 1)} 
                disabled={currentPage <= 0}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"> 
                    Página anterior
            </button>
            <button 
                onClick={()=> changePage(currentPage + 1)} 
                disabled={currentPage >= totalPages-1}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
                    Siguiente página
            </button>
        </div>
        </>
    )
}

export default ProfessionalsList