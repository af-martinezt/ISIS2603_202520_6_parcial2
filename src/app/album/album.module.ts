import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { CancionModule } from '../cancion/cancion.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AlbumListComponent, AlbumDetailComponent],
  imports: [CommonModule, CancionModule, RouterModule],
  exports: [AlbumListComponent, AlbumDetailComponent],
})
export class AlbumModule {}