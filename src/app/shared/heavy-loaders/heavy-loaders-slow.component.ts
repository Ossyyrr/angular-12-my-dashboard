import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: ` <section [ngClass]="['w-full h-[600px]', cssClass]">
    Heavy Loader Slow
  </section>`,
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true }) cssClass!: string;
  //! Ejemplo de lo que no se debe hacer
  constructor() {
    const start = Date.now();
    while (Date.now() - start < 2000) {} //! Código bloqueante que simula una carga pesada
    console.log('Cargado');
  }
}
