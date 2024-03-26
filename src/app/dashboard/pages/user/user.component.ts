import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/user.service';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
})
export class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  public user = toSignal(
    //! toSignal convierte un observable en un signal
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `Información del usuario: ${this.user()?.first_name} ${
        this.user()?.last_name
      } `;
    }

    return 'Información del usuario';
  });
}
