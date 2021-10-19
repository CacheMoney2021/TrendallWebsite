from django.urls import path
from . import views
from .views import index
from rest_framework import routers

urlpatterns = [
    path('', index),
    path('viewvase/', index),
    path('advanced-search/', index),
    path('search/', index),
    path('about/', index),
    path ('contact/', index)
]