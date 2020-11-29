import { MaterialModule } from './module/material.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
  ],
  exports: [
      CommonModule,
      MaterialModule
  ],
  providers: [
  ],
  entryComponents: [
  ]
})

export class SharedModule {
}
