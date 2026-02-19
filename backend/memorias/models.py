from django.db import models

class Memoria(models.Model):
    nome = models.CharField(max_length=10)
    sobrenome = models.CharField(max_length=20)
    dataNascimento = models.DateField()
    dataFalecimento = models.DateField()
    mensagem = models.TextField(max_length=60)