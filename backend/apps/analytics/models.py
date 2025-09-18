from django.db import models
from django.contrib.auth.models import User

class AppointmentAnalytics(models.Model):
    appointment = models.ForeignKey('appointments.Appointment', on_delete=models.CASCADE)
    patient = models.ForeignKey(User, on_delete=models.CASCADE)
    doctor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='doctor_analytics')
    appointment_date = models.DateTimeField()
    status = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

class PrescriptionAnalytics(models.Model):
    prescription = models.ForeignKey('prescriptions.Prescription', on_delete=models.CASCADE)
    patient = models.ForeignKey(User, on_delete=models.CASCADE)
    doctor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='prescription_analytics')
    created_at = models.DateTimeField(auto_now_add=True)

class PaymentAnalytics(models.Model):
    payment = models.ForeignKey('payments.Payment', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_id = models.CharField(max_length=100)
    status = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)