from rest_framework import viewsets, permissions
from .models import Prescription
from .serializers import PrescriptionSerializer

class PrescriptionViewSet(viewsets.ModelViewSet):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(doctor=self.request.user)