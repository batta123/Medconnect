import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth/';

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}register/`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}login/`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const logout = async () => {
    try {
        await axios.post(`${API_URL}logout/`);
    } catch (error) {
        throw error.response.data;
    }
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const clearUser = () => {
    localStorage.removeItem('user');
};