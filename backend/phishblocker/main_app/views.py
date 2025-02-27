from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
    

def analyse(request):
    return render(request, 'analyse.html')
