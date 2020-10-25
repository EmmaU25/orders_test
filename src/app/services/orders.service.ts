import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from './../../environments/environment';
import { Order } from './../models/order';
import { Detail } from '../models/detail';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  orders : Order[];
  constructor(private http: HttpClient) { }
  
  getOrders(){
    const options = {
      headers : new HttpHeaders().append('Authorization', environment.auhorization)
    }
    return this.http.get(environment.apikey,options);
  }

  saveDataLocal(){
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  getDataLocal(){
    if(localStorage.getItem('orders'))
      this.orders = JSON.parse(localStorage.getItem('orders'));
  }

  addNewItem(id:string, item: Detail): boolean{
    let flag: boolean = false;

    console.log(this.orders);
    console.log("id: "+ id + " datta: "+JSON.stringify(item))
    this.orders.map(data =>{
      if(data.id == id){
        data.items.push(item);
        console.log("los items" +data.items);
        flag = true;
        this.saveDataLocal();
      }
    });

    console.log(this.orders);
    return flag;
  }
}
