from rest_framework import serializers
from memorias import models

class MemoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Memoria
        fields = '__all__'