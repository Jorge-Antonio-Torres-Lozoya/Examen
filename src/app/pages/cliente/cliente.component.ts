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
editarClientesModal:boolean=false;

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
    this.currentCliente=cliente;
this.editarClientesModal=true;

    console.log(this.currentCliente);

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

  onSubmitEditCliente(formEdit:NgForm){
    if(!formEdit.value){
      return;
    }
    console.log(formEdit.value);
   this.clienteService.update(formEdit.value,this.currentCliente.id_cliente).subscribe((res)=>{
      console.log(res);
      this.ngOnInit();
      this.editarClientesModal=false;
   });
    }
    eliminar(){
      this.clienteService.deleteCliente(this.currentCliente.id_cliente).subscribe((res)=>{
        console.log(res);
        this.ngOnInit();
        this.editarClientesModal=false;
      });
    }
  CancelarAgregarClientesModal(){
    this.agregarClientesModal=false;
  }
  CancelarEditarClientesModal(){
    this.editarClientesModal=false;
  }
}
