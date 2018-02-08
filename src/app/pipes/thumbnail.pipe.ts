import { Pipe, PipeTransform } from '@angular/core';
import { MediaService } from '../services/media.service';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  constructor(private mediaService: MediaService){};

  result:any; 

  transform(filename: string, args?: string): string {

    const images = {
      large: '-tn640.png',
      medium: '-tn320.png',
      small: '-tn160.png',
      screenshot: '-tn400.png',
    };

    if (args) {
      this.result = filename.split('.')[0] + images[args];
      console.log(this.result);
      return this.result;
    }
    this.result = filename.split('.')[0] + images.small;
    console.log(this.result);
    return this.result ;
    
  }

  

}
