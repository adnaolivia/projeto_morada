import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Memoria } from "../models/memoria.model";

@Injectable({
    providedIn: 'root'
})
export class MemoriaService {
    private apiUrl = 'http://localhost:3000/memorias';

    constructor(private http: HttpClient) {}

    criarMemoria(memoria: Memoria): Observable<any> {
        return this.http.post(this.apiUrl, memoria);
    }

    listarMemorias(): Observable<Memoria[]> {
        return this.http.get<Memoria[]>(this.apiUrl);
    }
}