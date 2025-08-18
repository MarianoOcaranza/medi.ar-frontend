import { checkAuth, login, logout, registerPatient, registerProfessional } from "@/services/authService";
import { AxiosResponse } from "axios";
import { create } from "zustand";

interface AuthState {
    isLogged: boolean;
    loading: boolean;
    error: string | null;
    user: {username: string, role: string} | null;
    login: (userData: {username: string, password: string}) => Promise<AxiosResponse>;
    logout: ()=> void;
    check: ()=> Promise<AxiosResponse>;
    registerPatient: (data: RegisterPatientData)=> Promise<void>;
    registerProfessional: (data: RegisterProfessionalData)=> Promise<void>;
}

interface RegisterPatientData {
    username: string,
	email: string,
	password: string,
	firstName: string,
	lastName: string,
	provincia: string,
	localidad: string,
	phone: string,
	
}

interface RegisterProfessionalData {
	username: string,
	email: string,
	password: string,
	firstName: string,
	lastName: string,
	provincia: string,
	localidad: string,
	phone: string,
	matriculaNac: string,
	matriculaProv: string
	specialty: string,
	modalidad: string
}

export const useAuthStore = create<AuthState>((set)=> ({
    loading: false,
    error: null,
    user: null,
    isLogged: false,

    login: async (userData: {username: string, password: string}) => {
        set({loading: true, error: null})
        try {
            const response = await login(userData);
            const user = {username: response.data.username, role: response.data.role};
            set({isLogged: true, user: user, loading: false})
            return response
        } catch(err: any) {
            set({error: err.response?.data.message || "Error no controlado", loading: false});
            throw err
        } 
    },

    logout: ()=> {
        logout();
        set({isLogged: false, user: null});
    },

    check: async ()=> {
        set({loading: true, error: null})
        try {
            const response = await checkAuth();
            const user = {username: response.data.username, role: response.data.role}
            set({isLogged: true, user: user, loading: false})
            return response;
        } catch (err: any) {
            set({isLogged: false, user: null, error: err.response?.data || "Error checkeando autenticacion", loading: false})
            throw err;
        }
    },

    registerPatient: async(data: RegisterPatientData)=> {
        set({loading: true, error: null})
        try {
            const response = await registerPatient(data);
            set({loading: false})
        } catch(err: any) {
            set({loading: false, error: err.response?.data || "Error registrando paciente"});
            throw err;
        }
    },
    registerProfessional: async(data: RegisterProfessionalData)=> {
        set({loading: true, error: null})
        try {
            const response = await registerProfessional(data);
            set({loading: false})
        } catch(err: any) {
            set({loading: false, error: err.response?.data || "Error registrando profesional"});
            throw err;
        }
    }
}))