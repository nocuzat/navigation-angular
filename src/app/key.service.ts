import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getParentInjectorViewOffset } from '@angular/core/src/render3/util';
import { Pipe } from '@angular/compiler/src/core';


@Injectable({
  providedIn: 'root'
})
export class KeyService {

  constructor(private http: HttpClient) { }
  getNews(){
  return this.http.get("http://jsonplaceholder.typicode.com/users")
  }
}

