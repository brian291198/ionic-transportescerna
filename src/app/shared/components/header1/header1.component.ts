import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss'],
})
export class Header1Component  implements OnInit {

  public menu1!: string;
  private activatedRoute = inject(ActivatedRoute);
  public menuOpen = false; // Estado del menú

  constructor(private router: Router) { }

  ngOnInit() {
    this.menu1 = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Cambia el estado del menú
  }

  closeMenu() {
    this.menuOpen = false; // Cierra el menú
  }

  NavegarHistory(){
    this.router.navigate(['/history']) 
  }
<<<<<<< Updated upstream

  NavegarPromocion(){
    this.router.navigate(['/promociones']) 
  }

  NavegarUbicanos(){
    this.router.navigate(['/ubicanos']) 
  }

  NavegarPreguntas(){
    this.router.navigate(['/preguntas']) 
  }

  NavegarPerfil(){
    this.router.navigate(['/perfil']) 
  }

=======
  NavegarCotizacion(){
    this.router.navigate(['/cotizacion']) 
  }
>>>>>>> Stashed changes
}
