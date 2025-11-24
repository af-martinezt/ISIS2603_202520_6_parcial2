import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancionListComponent } from './cancion-list/cancion-list.component';
import { CancionDetailComponent } from './cancion-detail/cancion-detail.component';

@NgModule({
  declarations: [CancionListComponent, CancionDetailComponent],
  imports: [CommonModule],
  exports: [CancionListComponent, CancionDetailComponent],
})
export class CancionModule {}