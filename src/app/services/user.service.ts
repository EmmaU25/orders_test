import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  user: Login;
  public users: Login[] = [];

  constructor() { }


  getUser(username: string, pwd: string): boolean{
    this.loadUsersStorage();
    this.user = null;

  
    this.users.map(data =>{
      if(data.username == username && data.pwd == pwd){
        this.user =  data;
        this.saveDataLocalUser();
      }
    });

    return this.user != null ? true : false
  }

  registerUser(user:Login){
    let usere = new Login(user);
    this.user = usere;
  
    //this validation is juste for this excercise, because we have to have only one user
    if(this.users.length > 0){
      this.users.map(data =>{
        if(data.username != user.username && data.pwd != user.pwd){
          this.users.push(this.user);
          this.saveDataLocalUsers();
        }
      });
      
    }else{
      this.users.push(this.user);
      this.saveDataLocalUsers();
    }
  
  
    return true;
  }

  loadUserStorage(){
    if(localStorage.getItem('user'))
      this.user = JSON.parse(localStorage.getItem('user'));
  }

  loadUsersStorage(){
    if(localStorage.getItem('users'))
    this.users = JSON.parse(localStorage.getItem('users'));
  }


  saveDataLocalUsers(){
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  saveDataLocalUser(){
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  checkSession(){
    return localStorage.getItem('user') ? true : false;
  }

  closeSession(){
    localStorage.removeItem('user');
    this.user = null;
  }
}
