import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://192.168.1.42:8443/api'

interface RegisterPatientData {
    username: string,
	email: string,
	password: string,
	firstName: string,
	lastName: string,
	provincia: string,
	localidad: string,
	phone: string,
	specialty: string,
	modalidad: string
}

interface UserLoginData {
	username: string,
	password: string
}
interface LoginResponse {
	username: string,
	role: string,
}

export const registerPatient = async(data: RegisterPatientData) => {
    const response = await axios.post(`${API_URL}/auth/patients`, data);
    return response;
}

export const login = async(data: UserLoginData) => {
	const response = await axios.post<LoginResponse>(`${API_URL}/auth/login`, data, {withCredentials: true});
	return response;
}

export const logout = ()=> {
	const response = axios.post(`${API_URL}/logout`, {}, {withCredentials: true});
	return response;
}

export const checkAuth = async()=> {
	const response = await axios.get<LoginResponse>(`${API_URL}/users/me`, {withCredentials: true});
	return response;
}