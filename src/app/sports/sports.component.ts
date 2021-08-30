import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  isLoading=false;

  constructor(private _services:NewsapiService) { }
  
  topsportsDisplay:any=[];

  ngOnInit(): void {
    this.isLoading=true;

    this._services.sportsnews().subscribe((result)=>{
      console.log(result);
      this.isLoading=false;

      this.topsportsDisplay=result.articles;

  })
}
}