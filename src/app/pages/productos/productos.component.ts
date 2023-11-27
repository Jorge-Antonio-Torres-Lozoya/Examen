import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductosService } from './productos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent  implements OnInit {
  productos?:any[];
  currentProducto?:any;
  productosUsb?:Subscription;
  agregarProductosModal:boolean=false;
  editarProductosModal:boolean=false;

  admin_id?:number;

    constructor(private productoService:ProductosService) { }

    ngOnInit() {
      this.admin_id=localStorage.getItem('admin_id') as unknown as number;
      console.log(this.admin_id);

  this.productosUsb=this.productoService.getAll().subscribe((res)=>{
    this.productos=res;
    });
    }

    editarProducto(producto:any){
      this.currentProducto=producto;
  this.editarProductosModal=true;

      console.log(this.currentProducto);

    }

    AgregarProductosModal()
    {
    console.log('AgregarproductosModal');
    this.agregarProductosModal=true;



    }
    onSubmbitCreateProducto(formDataCreate:NgForm){
      if(!formDataCreate.value){
        return;
      }
      console.log(formDataCreate.value);
      const data = formDataCreate.value;
      data.admin_id = Number(this.admin_id);
      console.log(data);
      console.log(this.admin_id);


      this.productoService.create(data).subscribe((res)=>{
        console.log(res);
        this.ngOnInit();
        this.agregarProductosModal=false;

      });
    }

    onSubmitEditProducto(formEdit:NgForm){
      if(!formEdit.value){
        return;
      }
      console.log(formEdit.value);
     this.productoService.update(formEdit.value,this.currentProducto.id_producto).subscribe((res)=>{
        console.log(res);
        this.ngOnInit();
        this.editarProductosModal=false;
     });
      }
      eliminar(){
        this.productoService.deleteProducto(this.currentProducto.id_producto).subscribe((res)=>{
          console.log(res);
          this.ngOnInit();
          this.editarProductosModal=false;
        });
      }
    CancelarAgregarProductosModal(){
      this.agregarProductosModal=false;
    }
    CancelarEditarProductosModal(){
      this.editarProductosModal=false;
    }





}
