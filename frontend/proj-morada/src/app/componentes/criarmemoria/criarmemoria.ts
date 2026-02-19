import { Component } from '@angular/core';
import { Memoria } from '../../models/memoria.model';
import { MemoriaService } from '../../services/memoria.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-criarmemoria',
  imports: [FormsModule],
  templateUrl: './criarmemoria.html',
  styleUrl: './criarmemoria.css',
})
export class Criarmemoria {
  memoria: Memoria = {
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    dataFalecimento: '',
    mensagem: ''
  };

  constructor(private memoriaService: MemoriaService) {}

  salvarMemoria() {
    this.memoriaService.criarMemoria(this.memoria).subscribe({
      next: (response) => {
        console.log('Memória criada com sucesso:', response);
        alert('Memória criada com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao criar memória:', err);
      }
    });
  }
}
