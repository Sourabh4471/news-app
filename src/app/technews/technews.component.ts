import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
  isLoading=false;

  constructor(private _services:NewsapiService) { }
  
  toptechDisplay:any=[];

  ngOnInit(): void {
    this.isLoading=true;

    this._services.technews().subscribe((result)=>{
      console.log(result);
      this.isLoading=false;

      this.toptechDisplay=result.articles;

  })

}}
