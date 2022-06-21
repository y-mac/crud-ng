import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { UsersComponent } from './components/users/users.component';
import { PrivateComponent } from './private.component';
@NgModule({
  declarations: [UsersComponent, PrivateComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatListModule,
  ],
})
export class PrivateModule {}
