from django.urls import path
from . import views

urlpatterns = [
    path('auth/register/', views.register_user, name='register_user'),
    path('auth/login/', views.login_user, name='login_user'),
    path('auth/profile/', views.get_user_profile, name='get_user_profile'),
    path('checkout/subscribe/', views.subscribe_plan, name='subscribe_plan'),
    path('services/request/', views.submit_service_request, name='submit_service_request'),
    path('services/list/', views.list_service_requests, name='list_service_requests'),
    path('contact/', views.contact_submit, name='contact_submit'),
    path('demo/', views.demo_submit, name='demo_submit'),
    path('newsletter/', views.newsletter_submit, name='newsletter_submit'),
    path('telemetry/live/', views.live_telemetry, name='live_telemetry'),
    path('admin/analytics/', views.admin_analytics, name='admin_analytics'),
]
