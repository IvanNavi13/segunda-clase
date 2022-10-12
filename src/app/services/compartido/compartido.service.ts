import { Injectable } from '@angular/core';

// los servicios son singleton(patron de diseño), solo tiene  una instancia.
// "root", que funcione en todos lados. 
// Si se provide en otro lado, se crea una nueva instancia
// Para mejores practicas se crea una carpeta para cada servicio
// Evitar dependencias circulares 

@Injectable({
  providedIn: 'root'    //proveedor.
})                      
export class CompartidoService {

  constructor() { }
  
  private _name: string = '';
  private _email: string = '';  //"!:" despues se inicializa

  get name(){
    return this._name;
  }
  get email(){
    return this._email;
  }
  set name(name:string){
    this._name = name;
  }
  set email(email:string){
    this._email = email;
  }


}
