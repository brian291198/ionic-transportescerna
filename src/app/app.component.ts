import { Component } from '@angular/core';

import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  cliente: any;

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    const idCliente = 6; // Cambia esto según tu cliente
    this.clienteService.obtenerCliente(idCliente).subscribe(
      (data) => {
        this.cliente = data;
        console.log(this.cliente);
      },
      (error) => {
        console.error('Error al obtener el cliente:', error);
      }
    );
  }


}
