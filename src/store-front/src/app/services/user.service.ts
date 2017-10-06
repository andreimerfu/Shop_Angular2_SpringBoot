import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';
import {User} from '../models/user';

@Injectable()
export class UserService {
  private serverPath: string = AppConst.serverPath;

  constructor(private http:Http) { }

  newUser(username: string, email:string) {
  	let url = this.serverPath+'/user/newUser';
  	let userInfo = {
  		"username" : username,
  		"email" : email
  	}
  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem('xAuthToken')
  	});

  	return this.http.post(url, JSON.stringify(userInfo), {headers : tokenHeader});
  }

  updateUserInfo(user: User, newPassword: string, currentPassword: string){
    let url = this.serverPath + "/user/updateUserInfo";
    let userInfo = {
      "id": user.id,
      "firstName": user.firstName,
      "lastName": user.lastName,
      "username": user.username,
      "currentPassword": currentPassword,
      "email": user.email,
      "newPassword": newPassword
    };

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token': localStorage.getItem("xAuthToken")
    });

    return this.http.post(url, JSON.stringify(userInfo),{headers: tokenHeader});
  }

  retrievePassword(email:string) {
  	let url = this.serverPath+'/user/forgetPassword';
  	let userInfo = {
  		"email" : email
  	}
  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem('xAuthToken')
  	});

  	return this.http.post(url, JSON.stringify(userInfo), {headers : tokenHeader});
  }

  getCurrentUser(){
    let url = this.serverPath+'/user/getCurrentUser';
  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem('xAuthToken')
  	});

  	return this.http.get(url, {headers : tokenHeader});
  }

}
