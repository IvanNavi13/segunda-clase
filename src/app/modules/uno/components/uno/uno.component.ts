import { Component, OnInit } from '@angular/core';
import { CompartidoService } from '../../../../services/compartido/compartido.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  constructor( private compartidoService: CompartidoService) { }

  ngOnInit(): void {
    this.fillForm();
  }

  public fillForm(){
    //debugger
    console.log("1---");
    let boton = document.getElementById("btn-1")
    boton?.addEventListener('click', () =>{
      this.compartidoService.name = "Ivan"
      this.compartidoService.email = "ivan13@gmail.com"
      console.log("1---");
      console.log(this.compartidoService);
    })
  }

  

}
