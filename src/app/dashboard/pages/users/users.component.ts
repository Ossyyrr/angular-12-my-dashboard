import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TitleComponent } from '@shared/title/title.component';
import { UsersService } from '../../../services/user.service';
@Component({
  selector: 'app-users',
  standalone: true,
  styleUrl: './users.component.css',
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  public usersService = inject(UsersService);
}
