import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {
  
  private cars: any = [];


  constructor(private httpClient: HttpClient) { }


  public getCars() : any {

      return this.httpClient.get('https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json');
    
    }
 
}
