import { searchProfessionals } from "@/services/searchService"
import { AxiosResponse } from "axios"
import { create } from "zustand"

interface SearchState {
    error: string | null,
    loading: boolean,
    professionals: Professional[],
    currentPage: number;
    totalPages: number;
    totalElements: number;
    search: (query: string, page: number) => Promise<void>
}

interface Professional {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    localidad: string,
    matriculaNac: string,
    matriculaProv: string,
    modalidad: string,
    phone: string,
    provincia: string,
    specialty: string,
}



export const useSearchStore = create<SearchState>((set)=> ({
        error: null,
        loading: true, //para cuando la pagina carga por primera vez, evitar que se muestre un mensaje de no encontrado
        professionals: [],
        currentPage: 0,
        totalPages: 0,
        totalElements: 0,

        search: async(query: string, page: number) => {
            set({loading: true, error: null})
            try {
                const response = await searchProfessionals(query, page);
                set({
                    professionals: response.data.content,
                    currentPage: response.data.currentPage,
                    totalPages: response.data.totalPages,
                    totalElements: response.data.totalElements, 
                    loading: false
                })
            } catch(err: any) {
                set({
                    loading: false, 
                    error: err.response?.data?.message || "Error no controlado"
                })
                throw err;
            }
        }
        
    })
)