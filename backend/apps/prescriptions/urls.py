from django.urls import path
from .views import PrescriptionListView, PrescriptionUploadView

urlpatterns = [
    path('prescriptions/', PrescriptionListView.as_view(), name='prescription-list'),
    path('prescriptions/upload/', PrescriptionUploadView.as_view(), name='prescription-upload'),
]