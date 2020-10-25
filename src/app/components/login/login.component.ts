import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from './../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService  ) {
    this.createForm();
   }

  ngOnInit(): void {
    let user:any = {username:'erny@envia.com', pwd:'Erny2612'};
    this.userService.registerUser(user);
  }

  get emailIsInvalid(){
    return this.forma.get('username').invalid && this.forma.get('username').touched;
  }

  get pwdInvalid(){
    return this.forma.get('pwd').invalid && this.forma.get('pwd').touched;
  }

  createForm(){
    this.forma = this.formBuilder.group({
      username : ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.required]]
    })
  }

  openSession(){
    if(this.forma.invalid){
      
    }

    let validUser = this.userService.getUser(this.forma.value['username'], this.forma.value['pwd']);
    
    if(validUser){
      this.router.navigateByUrl('/orders');
    }
    else{
      Swal.fire({
        icon: 'error',
        text: 'incorrect data'
      })
    }

  }

}
