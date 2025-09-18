import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// User authentication
export const login = (credentials) => {
    return apiClient.post('auth/login/', credentials);
};

export const signup = (userData) => {
    return apiClient.post('auth/signup/', userData);
};

// Appointments
export const fetchAppointments = (token) => {
    return apiClient.get('appointments/', {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const createAppointment = (appointmentData, token) => {
    return apiClient.post('appointments/', appointmentData, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

// Prescriptions
export const uploadPrescription = (formData, token) => {
    return apiClient.post('prescriptions/upload/', formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
    });
};

// Payments
export const processPayment = (paymentData, token) => {
    return apiClient.post('payments/', paymentData, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

// Analytics
export const fetchAnalytics = (token) => {
    return apiClient.get('analytics/', {
        headers: { Authorization: `Bearer ${token}` },
    });
};