import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  constructor(private mediaService: MediaService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('token') !== null){
      this.mediaService.getUserData().subscribe(Response=>{
        this.router.navigate(['front']);
        console.log('Welcome' + Response['full_name'])
      
      }, (error: HttpErrorResponse)=>{
        console.log(error);
        this.router.navigate(['front']);
      })
    }
    
  }

}
