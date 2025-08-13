import { checkAuth, login, logout } from "@/services/authService";
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
    }
}))