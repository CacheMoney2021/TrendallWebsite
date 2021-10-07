from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from .serializers import VaseSerializer, PlateSerializer
from .models import Vase, Plate
from rest_framework import generics
from rest_framework import filters


#API view to retreive all attributes of a vase with given a vaseRef
class GetTheVase(generics.ListAPIView):
    serializer_class = VaseSerializer
    def get_queryset(self):
        queryset = Vase.objects.all()
        vaseRef=self.request.query_params.get('vaseRef')
        try:
            if vaseRef is not None:
                queryset = queryset.filter(vaseRef=vaseRef)
            return queryset       
        except Exception as e:
            print(e)
            pass

# #API view for Basic Search and Advanced Search, takes in a vase paramter (zero, 1 or many) passed through URL.
class FilterVases(generics.ListAPIView):
    serializer_class = VaseSerializer 
    def get_queryset(self):
        queryset = Vase.objects.all()
        shapeName = self.request.query_params.get('shapeName') #get shapeName parameter from URL 
        if shapeName is not None:
            try:
                queryset = queryset.filter(shapeName__icontains=shapeName) #if shapeName in in database matches (full/partial) the searched dshapeName add it to queryset
            except Exception as e:
                print(e) # print any exceptions to log for debugging
        collectionName = self.request.query_params.get('collectionName')#get collectionName parameter from URL
        if collectionName is not None:
            try:
                queryset = queryset.filter(collectionName__icontains=collectionName)#if collectionName in in database matches (full/partial) the searched collectionName add it to queryset
            except Exception as e:
                print(e) #
        prevColl = self.request.query_params.get('previousCollection') #get previousCollection parameter from URL
        if prevColl is not None:
            try:
                queryset = queryset.filter(prevColl__icontains=prevColl) #if previousCollection in in database matches (full/partial) the searched previousCollection, add it to queryset
            except Exception as e:
                print(e)
        artistName = self.request.query_params.get('artistName') #get artistName parameter from URL
        if artistName is not None:
            try:
                queryset = queryset.filter(artistName__icontains=artistName)#if artistName in in database matches (full/partial) the searched artistName, add it to queryset
            except Exception as e:
                print(e)
                pass
        provenanceName = self.request.query_params.get('provenanceName') #get provenanceName parameter from URL
        if provenanceName is not None:
            try:
                queryset = queryset.filter(provenanceName__icontains=provenanceName)#if provenanceName in in database matches (full/partial) the searched proveanceName, add it to queryset
            except Exception as e:
                print(e)
                pass
        publications = self.request.query_params.get('publications') #get publications parameter from URL
        if publications is not None:
            try:
                queryset = queryset.filter(publications__icontains=publications)#if publications in in database matches (full/partial) the searched publications, add it to queryset
            except Exception as e:
                print(e)
                pass    
        fabric = self.request.query_params.get('fabric') #get fabric parameter from URL
        if fabric is not None:
            try:
                queryset = queryset.filter(fabric__icontains=fabric)#if fabric in in database matches (full/partial) the searched fabric, add it to queryset
            except Exception as e:
                print(e)
                pass
        vaseRef = self.request.query_params.get('vaseRef') #get vaseRef parameter from URL
        if vaseRef is not None:
            try:
                queryset = queryset.filter(vaseRef__icontains=vaseRef) #if vaseRef in in database matches matches (full/partial) the searched vaseRef, add it to queryset
            except Exception as e:
                print(e)
                pass
        subject = self.request.query_params.get('subject') #get subject parameter from URL
        if subject is not None:
            try:
                queryset = queryset.filter(subject__icontains=subject) #if subjectin in database matches (full/partial) the searched subject, add it to queryset
            except Exception as e:
                print(e)
        return queryset 


#API view to retreive the plateRef using the vase_id passed as a URL parameter 
class GetPlate(generics.ListAPIView):
    serializer_class = PlateSerializer 
    def get_queryset(self):
        queryset = Plate.objects.all()
        vase = self.request.query_params.get('vase')
        if vase is not None:
            try:
                queryset = queryset.filter(vase=vase)
            except Exception as e:
                print(e)
        return queryset


# API view to get a vase with a vaseID passed through the URL
# class GetVase(generics.ListAPIView):
#     serializer_class = VaseSerializer 
#     def get_queryset(self):
#         queryset = Vase.objects.all()
#         vaseRef = self.request.query_params.get('vaseRef')
#         if vaseRef is not None:
#             queryset = queryset.filter(vaseRef=vaseRef)
#         return queryset

# class FilterVases(generics.ListAPIView):
#     serializer_class = VaseSerializer 
#     def get_queryset(self):
#         queryset = Vase.objects.all()
#         fabric = self.request.query_params.get('fabric')
#         if fabric is not None:
#             queryset = queryset.filter(fabric__icontains=fabric)
#         vaseRef = self.request.query_params.get('vaseRef')
#         if vaseRef is not None:
#             queryset = queryset.filter(vaseRef=vaseRef)
#         subject = self.request.query_params.get('subject')
#         if subject is not None:
#             queryset = queryset.filter(subject__icontains=subject) 
#         return queryset 




def main(request):
    return HttpResponse("Hello")