# MediConnect Backend Documentation

## Overview
MediConnect is an online doctor appointment and healthcare management system designed to streamline the process of booking appointments, managing prescriptions, and handling payments. This backend is built using Django, providing a robust and scalable solution for healthcare management.

## Features
- User authentication with role-based access (Patient, Doctor, Admin)
- Appointment management (booking, rescheduling, canceling)
- Prescription uploads and management
- Payment processing integration
- Analytics for tracking appointments and payments

## Installation

### Prerequisites
- Python 3.x
- Django 3.x or higher
- pip

### Setup
1. Clone the repository:
   ```
   git clone <repository-url>
   cd MediConnect/backend
   ```

2. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

3. Apply migrations:
   ```
   python manage.py migrate
   ```

4. Create a superuser (optional):
   ```
   python manage.py createsuperuser
   ```

5. Run the development server:
   ```
   python manage.py runserver
   ```

## API Endpoints
- **Authentication**
  - `/api/auth/signup/` - User registration
  - `/api/auth/login/` - User login
  - `/api/auth/logout/` - User logout

- **Appointments**
  - `/api/appointments/` - Manage appointments (GET, POST, PUT, DELETE)

- **Prescriptions**
  - `/api/prescriptions/` - Upload and manage prescriptions

- **Payments**
  - `/api/payments/` - Process payments for appointments

- **Analytics**
  - `/api/analytics/` - Generate and retrieve analytics reports

## Running Tests
To run tests, use the following command:
```
python manage.py test
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.