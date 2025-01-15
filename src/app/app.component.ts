import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lv-portfolio';
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0); // Desplaza la ventana al inicio
    });
  }
}
