import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  isLoading=false;
  
  constructor(private _services:NewsapiService) { }
  
  topbusDisplay:any=[];

  ngOnInit(): void {
    this.isLoading=true;

    this._services.businessnews().subscribe((result)=>{
      console.log(result);
      this.isLoading=false;

      this.topbusDisplay=result.articles;

  })
}

}
