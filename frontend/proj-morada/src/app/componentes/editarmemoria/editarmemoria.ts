import { Component } from '@angular/core';
import { Memoria } from '../../models/memoria.model';
import { MemoriaService } from '../../services/memoria.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-editarmemoria',
  imports: [FormsModule],
  templateUrl: './editarmemoria.html',
  styleUrl: './editarmemoria.css',
})
export class Editarmemoria {
   memoria: Memoria = {
      nome: '',
      sobrenome: '',
      dataNascimento: '',
      dataFalecimento: '',
      mensagem: ''
};

constructor(private memoriaService: MemoriaService) {}

  salvarMemoria() {
    this.memoriaService.editarMemoria(this.memoria).subscribe({
      next: (response) => {
        console.log('Memória editada', response);
        alert('Memória editada');
      },
      error: (err) => {
        console.error('Erro ao editar memória:', err);
      }
    });
  }
}
