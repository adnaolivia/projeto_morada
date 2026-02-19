import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { RouterModule } from '@angular/router';
import { MemoriaService } from '../../services/memoria.service';
import { Memoria } from '../../models/memoria.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  memorias: Memoria[] = [];

  constructor(private memoriaService: MemoriaService) {}

  ngOnInit(): void {
    this.memoriaService.listarMemorias().subscribe({
      next: (response) => {
        this.memorias = response;
        console.log('Memorias', response);
      },
      error: (err: any) => {
        console.error('erro ao chamar buscar memoriass', err);
      }
    });
  }
}
