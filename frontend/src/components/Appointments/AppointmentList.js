import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('/api/appointments/');
                setAppointments(response.data);
            } catch (err) {
                setError('Failed to fetch appointments');
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Your Appointments</h2>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.id}>
                        <strong>Doctor:</strong> {appointment.doctor.name} <br />
                        <strong>Date:</strong> {new Date(appointment.date_time).toLocaleString()} <br />
                        <strong>Status:</strong> {appointment.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentList;