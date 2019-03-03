import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Restro {
  Ranking: number;
  Rating: number
  Name: string;
  City: string;
  CuisineStyle: Array<string>;
  NumberofReviews: number;
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http : HttpClient) { }

  fetchRestrauantList(){
    return this.http.get<Restro[]>('../assets/mockdata.json');
  }
}
