import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:8000/api/clientes'; // Cambia esto según tu URL base

  constructor(private http: HttpClient) { }

  obtenerCliente(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
