 
import { Component } from '@angular/core';

// Se crea el decorador//
@Component({
    selector: 'app-contador',
    template:`
     <h1>{{title}}</h1>
    <!-- Se adiciona una funcion sencilla de java
    <but ton (click)="numero=numero+1"> +1 </button>
    <span>{{ numero }}</span>
    <button (click)="numero=numero-1"> -1</button>
    Pero es mejor hacer una función app.components.ts dentro 
    de la clase AppComponent y se muestra a continuacion
    -->
    <h1>La base es: {{base}}</h1>
    <button (click)="acumular(base)"> +{{base}}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-base)"> -{{base}}</button>
    <!-- la funcion acumular se llama desde app.component.ts -->
     ` 
})
 
// Se crea la clase a exportar//
export class ContadorComponent{
    public title: string = 'Contador App';
    public numero: number = 10; 
    public base: number = 5;

    acumular(valor: number){
        this.numero+= valor;
    }
}