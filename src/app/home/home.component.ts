import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emps=[];
  constructor(private service: DataService, private route:ActivatedRoute) 
  {

  }

  ngOnInit() 
  {
    var resultobservable=this.service.select();
    resultobservable.subscribe((response)=>
    {
      if(response['status']==='success')
      {
        this.emps= response['data'] as any[];
      }
      else
      {
        console.log("error", response['error'])
      }  
    })
  }

}
