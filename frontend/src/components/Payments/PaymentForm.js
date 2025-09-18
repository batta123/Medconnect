import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = ({ appointmentId }) => {
    const [amount, setAmount] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [status, setStatus] = useState('Pending');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handlePayment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/payments/', {
                appointment: appointmentId,
                amount,
                transaction_id: transactionId,
                status,
            });
            setSuccess('Payment processed successfully!');
            setError(null);
        } catch (err) {
            setError('Failed to process payment. Please try again.');
            setSuccess(null);
        }
    };

    return (
        <div>
            <h2>Payment Form</h2>
            <form onSubmit={handlePayment}>
                <div>
                    <label>Amount:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Transaction ID:</label>
                    <input
                        type="text"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Pay Now</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default PaymentForm;