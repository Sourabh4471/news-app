import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }

    newsApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=08eae57f47354fc2a46922e8bb2b38b4";
    techApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=08eae57f47354fc2a46922e8bb2b38b4"
    businessApiUrl="https://newsapi.org/v2/everything?q=tesla&from=2021-07-30&sortBy=publishedAt&apiKey=08eae57f47354fc2a46922e8bb2b38b4";

    sportsApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=08eae57f47354fc2a46922e8bb2b38b4";
    entertainmentApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=08eae57f47354fc2a46922e8bb2b38b4"

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

