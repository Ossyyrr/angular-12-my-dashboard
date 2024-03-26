import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition 1" />

    <section class="flex justify-start">
      <img
        srcset="
          https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_680
        "
        alt="Picsum"
        width="200"
        style="view-transition-name: hero1"
      />

      <div
        class="bg-blue-500 w-56 h-56"
        style="view-transition-name: hero2"
      ></div>
    </section>
  `,
})
export class ViewTransitionComponent {}
