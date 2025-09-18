import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Login from './components/Auth/Login';
import AppointmentList from './components/Appointments/AppointmentList';
import UploadPrescription from './components/Prescriptions/UploadPrescription';
import PaymentForm from './components/Payments/PaymentForm';
import Dashboard from './components/Analytics/Dashboard';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/login" component={Login} />
                <Route path="/appointments" component={AppointmentList} />
                <Route path="/prescriptions/upload" component={UploadPrescription} />
                <Route path="/payments" component={PaymentForm} />
                <Route path="/analytics" component={Dashboard} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;