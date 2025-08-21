import axios from "axios"

const API_URL = 'https://192.168.1.42:8443/api'

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

export const searchProfessionals = async (query: string, page: number) => {
    try {
        const response = axios.get<Professional[]>(`${API_URL}/professionals?search=${query}&page=${page}&size=10`)
        return response;
    } catch(err: any) {
        throw err;
    }
}

