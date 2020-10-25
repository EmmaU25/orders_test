import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-dialog-add-detail',
  templateUrl: './dialog-add-detail.component.html',
  styleUrls: ['./dialog-add-detail.component.scss']
})
export class DialogAddDetailComponent implements OnInit {
  formaDetail: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private orderService: OrdersService, public dialogRef: MatDialogRef<DialogAddDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order ) { }

  ngOnInit(): void {

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
    }
  }
}
