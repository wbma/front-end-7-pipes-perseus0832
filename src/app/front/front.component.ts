import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { HttpHeaders } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { ThumbnailPipe } from '../pipes/thumbnail.pipe';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
  printThis: string;
  mediaArray: any;
  stopArray: any;
  stopName: any;

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

    this.printThis = this.mediaService.test;
    this.mediaService.getAllMedia().subscribe(data =>{
      console.log(data);
      this.mediaArray = data;

      this.mediaArray.map(media => {
             
      });

      console.log(this.mediaArray); 
    
    })

  }

}
