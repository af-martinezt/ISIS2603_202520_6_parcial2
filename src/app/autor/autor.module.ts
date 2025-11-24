import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorListComponent } from './actor-list/actor-list.component';
import { AutorDetailComponent } from './actor-detail/actor-detail.component';
import { AlbumModule } from '../cancion/cancion.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AutorListComponent, AutorDetailComponent],
  imports: [CommonModule, AlbumModule, RouterModule],
  exports: [AutorListComponent, AutorDetailComponent],
})
export class AutorModule {}