import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos:Object[];
  url:string = 'http://localhost:3000/flavio/photos';

  constructor(http: HttpClient){
       http
      .get<Object[]>(this.url)
      .subscribe(photos =>  this.photos = photos );
  }



}
