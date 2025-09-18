import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to MediConnect</h1>
            <p>Your one-stop solution for online doctor appointments and healthcare management.</p>
            <div className="features">
                <h2>Features</h2>
                <ul>
                    <li>User Authentication</li>
                    <li>Appointment Management</li>
                    <li>Prescription Uploads</li>
                    <li>Payment Integration</li>
                    <li>Analytics Dashboard</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;