import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  // Establecer y declarar el valor del menú
  menuValue:boolean = false;
  menu_icon:string = 'bi bi-list'

  // Abrir o cerrar menú
  openMenu() {
    this.menuValue =!this.menuValue;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
    // quitar el overflow del body
    document.body.style.overflow = this.menuValue? 'hidden' : 'auto';  // para que siga funcionando cuando el menú está abierto/cerrado
  }

  closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }
}
