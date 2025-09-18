from django.urls import path
from .views import PaymentListView, PaymentDetailView, CreatePaymentView

urlpatterns = [
    path('payments/', PaymentListView.as_view(), name='payment-list'),
    path('payments/<int:pk>/', PaymentDetailView.as_view(), name='payment-detail'),
    path('payments/create/', CreatePaymentView.as_view(), name='create-payment'),
]