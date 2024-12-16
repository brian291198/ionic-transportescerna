import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  cliente: any;

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    const idCliente = 6; // Cambia este valor según el cliente que quieras mostrar
    this.clienteService.obtenerCliente(idCliente).subscribe(
      (data) => {
        this.cliente = data;
        console.log(this.cliente); // Puedes ver la respuesta de la API en consola
      },
      (error) => {
        console.error('Error al obtener el cliente:', error);
      }
    );
  }
}
