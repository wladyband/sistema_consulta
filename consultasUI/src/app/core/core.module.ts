import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {ToolbarModule} from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
  ],
  exports: [
    HeaderComponent

  ]
})
export class CoreModule { }
