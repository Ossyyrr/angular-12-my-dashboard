import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
@Component({
  selector: 'app-change-detection',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush, //! Angular no está pendiente de todos los cambios que ocurren, solo las señales envían el cambio. Mejora la performance
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css',
})
export class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update((value) => ({
        ...value,
        name: 'React',
      })); //! Debe retornar otro objeto diferente para que se detecte el cambio
      console.log('Hecho');
    }, 3000);
  }
}
