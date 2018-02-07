import { Component, OnInit } from '@angular/core';
import { Media } from '../class/media';
import { MediaService } from '../services/media.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  file: File;  
  media = new Media(this.file, '', '');

  constructor(private mediaService: MediaService) { }

  setFile(evt){
    console.log(evt.target.files[0]);
    this.file = evt.target.files[0];
    
  }

  startUpload(){
    //Create FormData object
    //add title & discription, add file,send FormData obj

    const form: FormData = new FormData();
    form.append('file',this.file);
    form.append('title',this.media.title);
    form.append('description',this.media.description);
    console.log(form);
    console.log(this.media);
    
      
    this.mediaService.uploadFile(form).subscribe(data => {
      console.log(data);
    },(e:HttpErrorResponse) => {
      console.log(e);
    });
    }

  

  ngOnInit() {}

}


