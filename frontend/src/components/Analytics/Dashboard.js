import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [analyticsData, setAnalyticsData] = useState(null);

    useEffect(() => {
        const fetchAnalyticsData = async () => {
            try {
                const response = await axios.get('/api/analytics'); // Adjust the endpoint as necessary
                setAnalyticsData(response.data);
            } catch (error) {
                console.error('Error fetching analytics data:', error);
            }
        };

        fetchAnalyticsData();
    }, []);

    if (!analyticsData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Analytics Dashboard</h1>
            <div>
                <h2>Appointments Overview</h2>
                <p>Total Appointments: {analyticsData.totalAppointments}</p>
                <p>Completed Appointments: {analyticsData.completedAppointments}</p>
                <p>Cancelled Appointments: {analyticsData.cancelledAppointments}</p>
            </div>
            <div>
                <h2>Prescriptions Overview</h2>
                <p>Total Prescriptions: {analyticsData.totalPrescriptions}</p>
            </div>
            <div>
                <h2>Payments Overview</h2>
                <p>Total Revenue: ${analyticsData.totalRevenue}</p>
            </div>
        </div>
    );
};

export default Dashboard;