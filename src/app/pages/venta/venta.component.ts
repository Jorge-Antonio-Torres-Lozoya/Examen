import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClienteService } from '../cliente/cliente.service';
import { ProductosService } from '../productos/productos.service';
import { VentaService } from './venta.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss'],
})
export class VentaComponent  implements OnInit {
  clientes?:any[];
  currentCliente?:any;
  clientesUsb?:Subscription;

 ventas?:any[];
 currentVenta?:any;

  admin_id?:number;
  id_cliente?:number;

  productos?:any[];
  currentProductos: any[] = []
  productosUsb?:Subscription;

  SeleccionarProductosModal:boolean=false;
  ticketModal:boolean=false;
  excesoDeStock = false;
  total?:number;

  constructor(private clienteService:ClienteService, private productoService:ProductosService, private ventaService:VentaService,private navCtrl: NavController) { }

  ngOnInit() {
    this.admin_id=localStorage.getItem('admin_id') as unknown as number;
    console.log(this.admin_id);

this.clientesUsb=this.clienteService.getAll().subscribe((res)=>{
  this.clientes=res;
  });
  this.productosUsb=this.productoService.getAll().subscribe((res)=>{
    this.productos=res;
    });
  }

  seleccionarCliente(cliente:any){
    this.id_cliente=cliente.id_cliente;
    console.log(cliente);
    this.SeleccionarProductosModal=true;

  }
  seleccionarProducto(){
    console.log(this.currentProductos);

    const venta: any = {};
    venta.admin_id = Number(this.admin_id);
    venta.fecha_venta= new Date().toISOString();;
    venta.id_cliente=this.id_cliente;
    console.log(venta);
this.ventaService.createVenta(venta).subscribe((res)=>{
  console.log(res);
  const idVenta=res.id_venta;
  this.crearDetallesVenta(idVenta);
});


  }
  crearDetallesVenta(id_venta:number){
    const detalleVenta=this.currentProductos.map((producto)=>{
      const detallesVenta:any={}
      detallesVenta.id_producto=producto.id_producto;
      detallesVenta.cantidad=producto.cantidadDeseada;
      detallesVenta.precio_unitario=producto.precio_venta;
      return detallesVenta;
    });
    const totalVenta = detalleVenta.reduce((total, item) => {
      return total + (item.cantidad * item.precio_unitario);
  }, 0);
    console.log(detalleVenta);
    this.total=totalVenta;
    console.log(this.total);


this.ventaService.createDetalleVenta(id_venta,detalleVenta).subscribe((res)=>{
  console.log(res);
  this.currentProductos=[];
  this.SeleccionarProductosModal=false;
  this.ventaService.getById(id_venta).subscribe((res)=>{
    console.log(res);
    this.currentVenta = res
    this.ventas=res.detalles;
    console.log(this.ventas);

    this.ticketModal=true;
  });

  this.ngOnInit();
})


  }


  toggleSelection(producto: any) {
    producto.selected = !producto.selected;
    if (producto.selected) {
      // Si el producto se seleccionó, añadir al carrito si no está ya
      if (!this.currentProductos?.includes(producto)) {
        this.currentProductos?.push(producto);
      }
    } else {
      // Si el producto se deseleccionó, eliminar del carrito
      this.currentProductos = this.currentProductos?.filter(p => p !== producto);
    }

    console.log(this.currentProductos);
  }
  actualizarCantidad(producto: any, cantidad: number) {
    if (cantidad > producto.cantidad_unidades) {
      // Si la cantidad deseada excede el stock disponible
      this.excesoDeStock = true;
      producto.cantidadDeseada = producto.cantidad_unidades; // Opcional: restablecer a la cantidad máxima permitida
      // Muestra un mensaje de advertencia o maneja la situación como prefieras
    } else {
      this.excesoDeStock = false;
      producto.cantidadDeseada = cantidad;
    }

    // Verifica si algún producto en el carrito excede su stock
    this.excesoDeStock = this.currentProductos.some(p => p.cantidadDeseada > p.cantidad_unidades);
  }

  CancelarSeleccionarProductosModal(){
    this.SeleccionarProductosModal=false;
  }
  cerrarTicketModal(){
    this.ticketModal=false;
    this.navCtrl.back()
  }
}
