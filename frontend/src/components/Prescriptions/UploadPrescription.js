import React, { useState } from 'react';
import axios from 'axios';

const UploadPrescription = () => {
    const [file, setFile] = useState(null);
    const [notes, setNotes] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleNotesChange = (e) => {
        setNotes(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('notes', notes);

        try {
            const response = await axios.post('/api/prescriptions/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSuccessMessage('Prescription uploaded successfully!');
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Failed to upload prescription. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div>
            <h2>Upload Prescription</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="file">Prescription File:</label>
                    <input type="file" id="file" onChange={handleFileChange} required />
                </div>
                <div>
                    <label htmlFor="notes">Notes:</label>
                    <textarea id="notes" value={notes} onChange={handleNotesChange} />
                </div>
                <button type="submit">Upload</button>
            </form>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default UploadPrescription;