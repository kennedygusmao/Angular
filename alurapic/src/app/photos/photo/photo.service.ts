import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';


const API = 'http://localhost:3000';
const Url = '/photos';

@Injectable({providedIn: 'root'})
export class PhotoService{


  constructor(private http: HttpClient)
  {

  }


  listFromUser(userName: string){
    return   this.http
                 .get<Photo[]>(API +'/'+ userName + Url);
  }

  listFromUserPaginated(userName: string, page: number){

    const paramsPage = new HttpParams().append('page',page.toString());

    return   this.http
                 .get<Photo[]>(API +'/'+ userName + Url,{params: paramsPage});
  }


}
