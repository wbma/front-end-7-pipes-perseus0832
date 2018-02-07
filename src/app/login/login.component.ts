import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';
import { error } from 'util';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;

  constructor(public mediaService: MediaService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('token') !== null){
      this.mediaService.getUserData().subscribe(Response=>{
        this.router.navigate(['front']);
        console.log('Welcome' + Response['full_name'])
      }, (error: HttpErrorResponse)=>{
        console.log(error);
      });
    }

      
  }

}
