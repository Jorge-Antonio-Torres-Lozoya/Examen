import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClienteService } from './cliente.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent  implements OnInit {
clientes?:any[];
currentCliente?:any;
clientesUsb?:Subscription;
agregarClientesModal:boolean=false;

admin_id?:number;

  constructor(private clienteService:ClienteService) { }

  ngOnInit() {
    this.admin_id=localStorage.getItem('admin_id') as unknown as number;
    console.log(this.admin_id);

this.clientesUsb=this.clienteService.getAll().subscribe((res)=>{
  this.clientes=res;
  });
  }

  editarCliente(cliente:any){
  }

  AgregarClientesModal()
  {
  console.log('AgregarClientesModal');
  this.agregarClientesModal=true;



  }
  onSubmbitCreateCliente(formDataCreate:NgForm){
    if(!formDataCreate.value){
      return;
    }
    console.log(formDataCreate.value);
    const data = formDataCreate.value;
    data.admin_id = Number(this.admin_id);
    console.log(data);
    console.log(this.admin_id);


    this.clienteService.create(data).subscribe((res)=>{
      console.log(res);
      this.ngOnInit();
      this.agregarClientesModal=false;

    });

  }
  CancelarAgregarClientesModal(){
    this.agregarClientesModal=false;
  }
}
