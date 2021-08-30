import { Component, OnInit } from '@angular/core';
import {NewsapiService} from '../newsapi.service'

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  isLoading=false;
  constructor(private _services:NewsapiService) { }

 topheadingDisplay:any=[];
  
    ngOnInit(): void {
      this.isLoading=true;

    this._services.topHeading().subscribe((result)=>{
      console.log(result);
      this.isLoading=false;
      this.topheadingDisplay=result.articles;
    })
  }}
  
