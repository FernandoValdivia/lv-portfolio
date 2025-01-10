import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  imagenes: string[] = [
    "https://res.cloudinary.com/lvaldivia/image/upload/f_auto,q_auto/v1/lv-portfolio/hero/fhffrv0svwjczpemsfka",
    "https://res.cloudinary.com/lvaldivia/image/upload/f_auto,q_auto/v1/lv-portfolio/hero/snage4hasayszyqefufe",
    "https://res.cloudinary.com/lvaldivia/image/upload/f_auto,q_auto/v1/lv-portfolio/hero/wzssetafmepa9oodityo",
    "https://res.cloudinary.com/lvaldivia/image/upload/f_auto,q_auto/v1/lv-portfolio/hero/b9si9phorsj5asskj8a1",
  ];

  currentIndex: number = 0;

  ngOnInit(): void {
    const leftContainer = document.querySelector('.left-container') as HTMLDivElement;

    if (leftContainer) {
      setInterval(() => {
        // Añadir la clase para iniciar el efecto de desvanecimiento
        leftContainer.classList.add('fade-out');

        // Cambiar la imagen después de la transición
        setTimeout(() => {
          this.currentIndex = (this.currentIndex + 1) % this.imagenes.length;
          leftContainer.style.backgroundImage = `url('${this.imagenes[this.currentIndex]}')`;

          // Remover la clase para hacer visible la nueva imagen
          leftContainer.classList.remove('fade-out');
        }, 200); // Tiempo sincronizado con el CSS (1s)
      }, 3000); // Cambiar cada 3 segundos
    }
  }
}
