import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PanelMenuModule } from 'primeng';




@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
