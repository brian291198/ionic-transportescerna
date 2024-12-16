import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.page.html',
  styleUrls: ['./cotizacion.page.scss'],
})
export class CotizacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  isPaquete: boolean = false;
  isSobre: boolean = false;

  onTipoChange(tipo: string) {
    if (tipo === 'paquete') {
      this.isPaquete = true;
      this.isSobre = false;
    } else if (tipo === 'sobre') {
      this.isPaquete = false;
      this.isSobre = true;
    }
  }

}
