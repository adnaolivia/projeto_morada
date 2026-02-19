from rest_framework import viewsets
from memorias.api import serializers
from memorias import models

class MemoriaViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MemoriaSerializer
    queryset = models.Memoria.objects.all()