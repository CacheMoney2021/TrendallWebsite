from django.db import models;
from django.db.models.fields.related import ManyToManyField;
#classes to create models and initialise object-relational database 


#---------notes----------

# #define artist class
# class Artist(models.Model) :
#     artistName = models.CharField(max_length=100)


#define vase class
class Vase(models.Model):
    vaseRef = models.CharField(max_length=255, primary_key=True)
    collectionName = models.CharField(max_length=600,blank=True,null=True)
    previousColl = models.CharField(max_length=600,blank=True, null=True)
    provenanceName = models.CharField(max_length=600,blank=True,null=True)
    height = models.CharField(max_length=50,blank=True,null=True)
    diameter = models.CharField(max_length=50,blank=True,null=True)
    publications = models.CharField(max_length=700,blank=True,null=True)
    subject = models.CharField(max_length=1000,blank=True,null=True)
    fabric = models.CharField(max_length=50, blank=True,null=True)
    technique = models.CharField(max_length=50,blank=True,null=True)
    shapeName = models.CharField(max_length=50,blank=True,null=True)
    # artist = models.ForeignKey(Artist,null=True, blank=True, on_delete=models.CASCADE)
    # def artistName(self):
    #     return self.artist.artistName

    
# define plate class. A plate can contain multiple images from difference vases, and a vase can
# have multiple images. Many to many relationship through vase. 
# TODO: need to ensure PK of vase is vaseRef for this to work easiest. Otherwise need to add a column for vaseRef
class Plate(models.Model): 
    vase = models.ManyToManyField(Vase)
    plateRef = models.CharField(max_length=100, primary_key=True)


#define scholar class
class Scholar(models.Model) :
    scholarID = models.CharField(max_length=10)
    scholarName = models.CharField(max_length=100)

