import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  isLoading=false;

  constructor(private _services:NewsapiService) { }
  
  topentertainmentDisplay:any=[];

  ngOnInit(): void {
        this.isLoading=true;

    this._services.entertainmentnews().subscribe((result)=>{
      console.log(result);
      this.isLoading=false;

      this.topentertainmentDisplay=result.articles;

  })
}}
