import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }

    newsApiUrl="https://gnews.io/api/v4/top-headlines?country=in&lang=en&token=da6a3a7ed70a8f6bb80e8e01fa9d95ef";
    techApiUrl="https://gnews.io/api/v4/top-headlines?country=in&topic=technology&lang=en&token=da6a3a7ed70a8f6bb80e8e01fa9d95ef"
    businessApiUrl="https://gnews.io/api/v4/top-headlines?country=in&topic=business&lang=en&token=da6a3a7ed70a8f6bb80e8e01fa9d95ef";

    sportsApiUrl="https://gnews.io/api/v4/top-headlines?country=in&topic=sports&lang=en&token=da6a3a7ed70a8f6bb80e8e01fa9d95ef";
    entertainmentApiUrl="https://gnews.io/api/v4/top-headlines?country=us&topic=entertainment&lang=en&token=da6a3a7ed70a8f6bb80e8e01fa9d95ef"

    topHeading():Observable<any>
    {
      return this._http.get(this.newsApiUrl);
    }

    technews():Observable<any>
    {
      return this._http.get(this.techApiUrl);
    }
    businessnews():Observable<any>
    {
      return this._http.get(this.businessApiUrl);
    }
    sportsnews():Observable<any>
    {
      return this._http.get(this.sportsApiUrl);
    }
    entertainmentnews():Observable<any>
    {
      return this._http.get(this.entertainmentApiUrl);
    }

}

