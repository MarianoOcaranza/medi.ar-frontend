import { searchProfessionals } from "@/services/searchService"
import { AxiosResponse } from "axios"
import { create } from "zustand"

interface SearchState {
    error: string | null,
    loading: boolean,
    professionals: Professional[],
    search: (query: string, page: number) => Promise<AxiosResponse>
}

interface Professional {
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
        loading: false,
        professionals: [],

        search: async(query: string, page: number) => {
            set({loading: true, error: null})
            try {
                const response = await searchProfessionals(query, page);
                console.log(response.data)
                set({professionals: response.data, loading: false})
                return response
            } catch(err: any) {
                set({loading: false, error: err.response?.data?.message || "Error no controlado"})
                console.log(err.response?.data?.message || "Error no controlado");
                throw err;
            }
        }
        
    })
)