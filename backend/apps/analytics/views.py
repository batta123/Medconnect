from django.shortcuts import render
from django.http import JsonResponse
from .models import AnalyticsReport
from django.views import View

class AnalyticsView(View):
    def get(self, request):
        reports = AnalyticsReport.objects.all()
        data = {
            "reports": list(reports.values())
        }
        return JsonResponse(data)

    def post(self, request):
        # Logic for creating a new analytics report can be added here
        pass

# Additional views for specific analytics can be added as needed.