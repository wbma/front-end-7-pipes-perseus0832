import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { error } from 'util';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Router } from '@angular/router';

@Injectable()
export class MediaService {
  test = 'Head line';
  username: string = "";
  password: string = "";
  status: string;
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  apiUrl_user = 'http://media.mw.metropolia.fi/wbma/users/user';
  apiUrl_media = 'http://media.mw.metropolia.fi/wbma/media';

  constructor(private http: HttpClient, private router: Router) { }

  public login(){
    console.log('uname: ' +this.username);
    console.log('pwd: ' +this.password);
    const body = {
      username: this.username,
      password: this.password,
    };

    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    this.http.post(this.apiUrl + '/login', body, settings).subscribe( response =>{
      console.log(response['token']);
      localStorage.setItem('token', response['token']);
      this.router.navigate(['front']);
      this.username=null;
      this.password=null;
      this.status=null;
    }, (error: HttpErrorResponse)=>{
      console.log(error.error.message);
      this.status = error.error.message;
    });
    
  }
  register(user){
    return this.http.post(this.apiUrl + '/users', user);
  }

  public getUserData(){
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token')),
    };
    console.log(settings);
    console.log(this.http.get(this.apiUrl_user, settings));
    return this.http.get(this.apiUrl_user, settings);
  }

  public uploadFile(media){
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token')),
    };
    console.log(settings);
    console.log(this.http.post(this.apiUrl_media, media, settings));
    return this.http.post(this.apiUrl_media, media, settings);
  }

  public getAllMedia(){
    return this.http.get(this.apiUrl + '/media');
  }



}
