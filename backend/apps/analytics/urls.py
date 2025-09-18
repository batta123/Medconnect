from django.urls import path
from .views import AnalyticsReportView

urlpatterns = [
    path('reports/', AnalyticsReportView.as_view(), name='analytics-reports'),
]