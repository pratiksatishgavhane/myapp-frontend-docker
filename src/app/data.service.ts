import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) 
  {

  }

  select()
  {
    return this.http.get("http://172.18.5.190:9898/showdata");
  }

}
