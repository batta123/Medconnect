# MediConnect Frontend Documentation

## Overview
MediConnect is an Online Doctor Appointment & Healthcare Management System designed to facilitate seamless interactions between patients and healthcare providers. This frontend application is built using React and connects to a Django backend.

## Features
- User Authentication: Secure login and signup for patients and doctors.
- Appointment Management: Book, reschedule, and cancel appointments.
- Prescription Uploads: Patients can upload prescriptions for their records.
- Payment Integration: Process payments for appointments.
- Analytics Dashboard: View analytics related to appointments and user activity.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd MediConnect/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
This will launch the application in your default web browser at `http://localhost:3000`.

### Building for Production
To create a production build, run:
```
npm run build
```
This will generate a `build` folder containing the optimized application.

## Folder Structure
- `public/`: Contains static files like `index.html`.
- `src/`: Contains the main application code.
  - `components/`: Reusable components for different functionalities.
  - `pages/`: Page components for routing.
  - `services/`: API service handlers.
  - `utils/`: Utility functions.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.