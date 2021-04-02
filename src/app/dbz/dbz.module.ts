import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BannerComponent } from './banner/banner.component';
import { FootComponent } from './foot/foot.component';





@NgModule({
  declarations: [MainPageComponent, PersonajesComponent, AgregarComponent, CabeceraComponent, BannerComponent, FootComponent]
  ,
    exports:[
        MainPageComponent,CabeceraComponent,BannerComponent,FootComponent
    ],
  imports: [
    CommonModule,
    FormsModule

  ],
  providers:[
    DbzService
  ]
  
})
export class DbzModule { }
