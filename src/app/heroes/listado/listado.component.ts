import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {
  heroes:string[] = ['Spiderman','Ironman','Hulk','Thor', 'Cap. América'];
  heroeBorrado:string = '';

 borrarHeroe()  {

  this.heroeBorrado =  this.heroes.shift() || ''; //Remueve el primer elemento de un arreglo o '' si es undefined
  /*const heroeBorrado =  this.heroes.splice(this.heroes.length -1,1);
   this.borrado = heroeBorrado[0].toString(); 
   console.log(heroeBorrado);
   */
 }

}
