import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.page.html',
  styleUrls: ['./cotizacion.page.scss'],
})
export class CotizacionPage implements OnInit {

  constructor(
  ) { }


  ngOnInit() {
    // Establecer el valor por defecto de tipoSeleccionado a 'sobre'
    this.tipoSeleccionado = 'sobre';
  }
  // Propiedades para los inputs
  ancho: number | null = null;
  largo: number | null = null;
  grosor: number | null = null; // Solo aplica para paquetes
  peso: number | null = null;
  costo: number | null = null;

  // Propiedad para determinar el tipo seleccionado
  tipoSeleccionado: 'sobre' | 'paquete' | null = null;

  // Método para gestionar la selección del tipo de envío
  seleccionarTipo(tipo: 'sobre' | 'paquete') {
    this.tipoSeleccionado = tipo;
    this.ancho = null;
    this.largo = null;
    this.grosor = null;
    this.peso = null;
    this.costo = null;
    // Si cambia a 'sobre', se limpia el valor de grosor porque no es necesario
    if (tipo === 'sobre') {
      this.grosor = null;
    }
  }

  // Método para validar los datos ingresados
  validarDatos(): boolean {
    if (!this.ancho || !this.largo || !this.peso) {
      return false; // Campos requeridos faltantes
    }

    // Si es un paquete, el grosor también es obligatorio
    if (this.tipoSeleccionado === 'paquete' && !this.grosor) {
      return false;
    }

    return true;
  }

  // Método para calcular la cotización
  calcularCosto() {
   
    // Variables para el cálculo
    let volumen: number = 0;
    let costoBase: number = 0;

    // Cálculo según el tipo de encomienda
    if (this.tipoSeleccionado === 'sobre') {
      volumen = (this.ancho || 0) * (this.largo || 0);
      costoBase = 5; // Costo base para sobres
    } else if (this.tipoSeleccionado === 'paquete') {
      volumen = (this.ancho || 0) * (this.largo || 0) * (this.grosor || 0);
      costoBase = 10; // Costo base para paquetes
    }

    // Fórmula final del costo
    this.costo = costoBase + (this.peso || 0) * 2 + volumen * 0.01;

    // Resultado
    // alert(`El costo estimado para su envío es: ${costo.toFixed(2)} unidades.`);
  }
}
