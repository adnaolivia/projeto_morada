import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe({
      next: (response: any) => {
        console.log('resposta da api:', response);
      },
      error: (err: any) => {
        console.error('erro ao chamar a api:', err);
      }
    })
  }
}
