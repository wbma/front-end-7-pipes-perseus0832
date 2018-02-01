import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { MediaService } from '../services/media.service';
import { error } from 'util';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private mediaService: MediaService) { }

  ngOnInit() {    
  }

  user = new User('u','p','e');  

  register(){
    console.log(this.user);
    this.mediaService.register(this.user).subscribe(Response =>{
      console.log(Response);
      this.mediaService.username = this.user.username;
      this.mediaService.password = this.user.password;
      this.mediaService.login();      
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
    }
  )}

}
