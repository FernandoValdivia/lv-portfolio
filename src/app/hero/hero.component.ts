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
  isBackground1Active: boolean = true; // Alterna entre background1 y background2

  ngOnInit(): void {
    const background1 = document.querySelector('.background1') as HTMLDivElement;
    const background2 = document.querySelector('.background2') as HTMLDivElement;

    if (background1 && background2) {
      // Configura la primera imagen
      background1.style.backgroundImage = `url('${this.imagenes[this.currentIndex]}')`;
      background1.classList.add('active');

      setInterval(() => {
        // Alterna entre las dos capas
        const nextIndex = (this.currentIndex + 1) % this.imagenes.length;
        const activeBackground = this.isBackground1Active ? background1 : background2;
        const nextBackground = this.isBackground1Active ? background2 : background1;

        // Cambia la imagen en la capa no activa
        nextBackground.style.backgroundImage = `url('${this.imagenes[nextIndex]}')`;

        // Activa la capa siguiente y desactiva la actual
        nextBackground.classList.add('active');
        activeBackground.classList.remove('active');

        // Actualiza el índice y alterna la capa activa
        this.currentIndex = nextIndex;
        this.isBackground1Active = !this.isBackground1Active;
      }, 2000); // Cambia cada segundo
    }
  }
}
