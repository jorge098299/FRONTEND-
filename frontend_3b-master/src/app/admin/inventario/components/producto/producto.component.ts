import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

  products: any[]=[
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},
    {id:1,nombre:"Teclado", precio:394.96, categoria_id:5, stock:12},

  
  ];
  cols: any []=[];
  openNew(){

  }

  editProduct(prod:any){

  }

  deleteProduct(prod:any){

  }
}
