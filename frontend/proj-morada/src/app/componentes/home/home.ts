import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { RouterModule } from '@angular/router';
import { MemoriaService } from '../../services/memoria.service';
import { Memoria } from '../../models/memoria.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit {

  constructor(
    private memoriaService: MemoriaService,
    private cdr: ChangeDetectorRef
  ) {}
  
  memorias: Memoria[] = [];

  ngOnInit(): void {
    this.memoriaService.listarMemorias().subscribe({
      next: (response) => {
        this.memorias = response;
        console.log('Memorias', response);

        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('erro ao chamar buscar memoriass', err);
      }
    });
  }
}
