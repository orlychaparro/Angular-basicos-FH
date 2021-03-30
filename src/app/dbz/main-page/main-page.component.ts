import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.service';





@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

 
 
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder:1000
  }

  

  constructor(){}
   
}
