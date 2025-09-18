from django.urls import path
from .views import AppointmentList, AppointmentDetail, BookAppointment, RescheduleAppointment, CancelAppointment

urlpatterns = [
    path('appointments/', AppointmentList.as_view(), name='appointment-list'),
    path('appointments/<int:pk>/', AppointmentDetail.as_view(), name='appointment-detail'),
    path('appointments/book/', BookAppointment.as_view(), name='book-appointment'),
    path('appointments/reschedule/<int:pk>/', RescheduleAppointment.as_view(), name='reschedule-appointment'),
    path('appointments/cancel/<int:pk>/', CancelAppointment.as_view(), name='cancel-appointment'),
]