import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// Import or define the API_URL_FC constant
import { k8ExternalIp } from '../../constants/url';

@Injectable({
    providedIn: 'root'
})
export class FoodItemService {

    private apiUrl = k8ExternalIp +'/foodcatolog/fetchRestaurantAndFoodItemsById/';

    constructor(private http: HttpClient) { }

    getFoodItemsByRestaurant(id:number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl+id}`)
          .pipe(
            catchError(this.handleError)
          );
      }
    
      private handleError(error: any) {
        console.error('An error occurred:', error);
        return throwError(()=> error);
      }

}