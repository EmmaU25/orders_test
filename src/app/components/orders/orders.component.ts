import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersService } from './../../services/orders.service';
import {MatPaginator} from '@angular/material/paginator';
import { Order } from 'src/app/models/order';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  displayedColumns: string[] = ['id', 'currency', 'number', 'note', 'name', 'shippingMethod', 'taxesIncluded', 'actions'];
  flag:boolean = false;
  dataSource = new MatTableDataSource<Order>(this.ordersService.orders);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public ordersService: OrdersService, private router: Router) {
    this.ordersService.getOrders().subscribe((data : any) =>{
      this.flag = true;
      console.log(data);
      this.ordersService.orders = data.orders;
      this.ordersService.saveDataLocal();
    });
   }
  

  ngAfterViewInit() {
    console.log('afterviewinit');
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    
   
  }


  seeDetail(id:string){
    console.log(id);
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
