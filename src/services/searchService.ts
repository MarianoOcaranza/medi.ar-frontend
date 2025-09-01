import axios from "axios"

const API_URL = 'https://192.168.1.42:8443/api'

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

interface ProfessionalPage {
    content: Professional[];
    totalPages: number;
    totalElements: number;
    currentPage: number //esta es la pagina actual
    size: number;
    first: boolean;
    last: boolean;
}

export const searchProfessionals = async (query: string, page: number) => {
    try {
        const response = axios.get<ProfessionalPage>(`${API_URL}/professionals?search=${query}&page=${page}`)
        return response;
    } catch(err: any) {
        throw err;
    }
}

