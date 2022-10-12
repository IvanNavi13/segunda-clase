import { Component, OnInit } from '@angular/core';
import { CompartidoService } from '../../../../services/compartido/compartido.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {

  constructor(public compartidoService: CompartidoService) { }

  ngOnInit(): void {
    // this.getDataForm();
    // console.log("2---");
    // console.log(this.compartidoService);
    this.buttonUpdate();
  }

  getDataForm(){
    let name: HTMLInputElement = <HTMLInputElement> document.getElementById("name");     // cast with <> // deprecated
    let email: HTMLInputElement =  document.getElementById("email") as HTMLInputElement; // cast with as
    
    name.value = this.compartidoService.name;
    email.value = this.compartidoService.email;

    console.log(name, email);

  }

  buttonUpdate(){
    let update = document.getElementById('update');
    update?.addEventListener('click', () =>{
      this.getDataForm();
    })
  }

}
