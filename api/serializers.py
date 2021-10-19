#this file serializes the models to use in the API views
from rest_framework import serializers
from .models import Vase, Plate
#Plate serializer
class PlateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plate
        fields = '__all__'
        
#Vase serializer 
class VaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vase
        fields = '__all__'
