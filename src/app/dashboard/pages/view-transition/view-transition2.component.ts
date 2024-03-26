import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition 2" />

    <section class="flex justify-end">
      <img
        srcset="
          https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_680
        "
        alt="Picsum"
        width="200"
        style="view-transition-name: hero1"
      />

      <div
        class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded"
        style="view-transition-name: hero2"
      ></div>
    </section>
  `,
})
export class ViewTransitionComponent {}
