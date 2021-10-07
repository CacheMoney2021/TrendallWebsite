from rest_framework import serializers
from .models import Vase, Plate

class PlateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plate
        fields = '__all__'
        
# vase serializer 
class VaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vase
        fields = '__all__'
    #     extra_fields = ['artistName']


    # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(VaseSerializer, self).get_field_names(
    #         declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields

# #serialize plate model
# class PlateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Plate
#         fields = '__all__' #access all fields
#     #     extra_fields = ['vaseID']

    # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(PlateSerializer, self).get_field_names(
    #         declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
#serialize the artist model 
# class ArtistSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Artist
#         fields = '__all__' #access all fields
