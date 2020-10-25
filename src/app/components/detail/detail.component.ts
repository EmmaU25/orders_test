import { ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrdersService } from 'src/app/services/orders.service';
import { MatAccordion } from '@angular/material/expansion';
import { Order } from 'src/app/models/order';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnChanges,DoCheck {

  public order: Order[];
  displayedColumns: string[] = ['sku', 'name', 'quantity', 'price'];
  formaDetail: FormGroup;
  panelOpenState = false;
  @ViewChild(MatAccordion) accordion: MatAccordion;


  constructor(private activedRouter: ActivatedRoute, private orderService: OrdersService, private formBuilder: FormBuilder, private changeDetectorRefs: ChangeDetectorRef) { }


  ngOnChanges(changes: SimpleChanges) {
    //console.log("change");
    this.orderService.getDataLocal();
    let ide = this.activedRouter.snapshot.params["id"];
    this.order = this.orderService.orders.filter(data => data.id == ide);
  }


  ngDoCheck(){
    
  }
  ngOnInit(): void {
    this.orderService.getDataLocal();
    let ide = this.activedRouter.snapshot.params["id"];
    this.order = this.orderService.orders.filter(data => data.id == ide);
    this.createformDetail();
  }

  get skuIsInvalid(){
    return this.formaDetail.get('sku').invalid && this.formaDetail.get('sku').touched;
  }

  get nameInvalid(){
    return this.formaDetail.get('name').invalid && this.formaDetail.get('name').touched;
  }

  get quantityInvalid(){
    return this.formaDetail.get('quantity').invalid && this.formaDetail.get('quantity').touched;
  }

  get priceInvalid(){
    return this.formaDetail.get('price').invalid && this.formaDetail.get('price').touched;
  }

  addItem(){

  }

  createformDetail(){
    this.formaDetail = this.formBuilder.group({
      sku: ['', [Validators.required]],
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price : ['',[Validators.required]]
    })
  }


  submitData(){
    if(!this.formaDetail.invalid){
      console.log(this.formaDetail.value);
      console.log("orden desde el detalle" + JSON.stringify(this.order[0]));
      if(this.orderService.addNewItem(this.order[0].id, this.formaDetail.value)){
        Swal.fire({
          icon: 'success',
          text: 'New item added'
        })
      }else{
        Swal.fire({
          icon: 'error',
          text: 'Sorry we have a problem, please contact the support technical'
        })
      }
      this.formaDetail.reset();
      this.accordion.closeAll();
      this.orderService.getDataLocal();
      let ide = this.activedRouter.snapshot.params["id"];
      this.order = this.orderService.orders.filter(data => data.id == ide);
    }
  }
  
}
