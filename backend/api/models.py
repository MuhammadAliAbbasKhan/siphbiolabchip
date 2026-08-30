from django.db import models
from django.utils import timezone

class UserAccount(models.Model):
    username = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    company = models.CharField(max_length=255, blank=True, null=True)
    is_paid = models.BooleanField(default=False)
    active_plan = models.CharField(max_length=100, default='Free Tier')
    paid_until = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def is_subscription_active(self):
        if not self.is_paid:
            return False
        if self.paid_until and self.paid_until > timezone.now():
            return True
        return False

    def __str__(self):
        return f"{self.email} ({self.active_plan})"


class DemoLead(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    company = models.CharField(max_length=250, blank=True, null=True)
    role = models.CharField(max_length=100, blank=True, null=True)
    facility_type = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Demo: {self.name} - {self.email}"


class SubscriptionOrder(models.Model):
    stripe_payment_id = models.CharField(max_length=150, unique=True)
    plan_id = models.CharField(max_length=100)
    plan_name = models.CharField(max_length=200)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(max_length=10, default='USD')
    billing_cycle = models.CharField(max_length=20, default='monthly')
    email = models.EmailField()
    cardholder = models.CharField(max_length=200)
    card_last4 = models.CharField(max_length=4)
    status = models.CharField(max_length=50, default='succeeded')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Sub Order #{self.id} - {self.plan_name} - {self.email}"


class ServiceRequest(models.Model):
    user_email = models.EmailField()
    user_name = models.CharField(max_length=200)
    company = models.CharField(max_length=250, blank=True, null=True)
    service_type = models.CharField(max_length=200, default='Custom Biochip Cartridge Manufacturing')
    facility_location = models.CharField(max_length=250, default='San Diego HQ Lab')
    cartridge_count = models.CharField(max_length=100, default='50 Cartridges / Month')
    urgency = models.CharField(max_length=100, default='Standard (7 Days)')
    details = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=100, default='PENDING_DISPATCH')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Service Req #{self.id} - {self.service_type} ({self.user_email})"


class ContactInquiry(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True, null=True)
    company = models.CharField(max_length=250, blank=True, null=True)
    testing_volume = models.CharField(max_length=100, blank=True, null=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Contact: {self.name} ({self.email})"


class NewsletterSubscriber(models.Model):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
