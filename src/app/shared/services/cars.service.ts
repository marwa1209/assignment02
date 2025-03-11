import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModel } from '../interfaces/car-model';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private apiUrl = '/api/v1/cars';
  private _HttpClient: HttpClient = inject(HttpClient);
  getCars(searchQuery: string = ''): Observable<CarModel[]> {
    const params = new HttpParams().set('search', searchQuery);
    return this._HttpClient.get<CarModel[]>(this.apiUrl, { params });
  }
  getLimitedCars(limit: number = 4): Observable<CarModel[]> {
    const params = new HttpParams().set('limit', limit.toString());
    return this._HttpClient.get<CarModel[]>(this.apiUrl, { params });
  }
  getCarById(id: string): Observable<CarModel> {
    return this._HttpClient.get<CarModel>(`${this.apiUrl}/${id}`);
  }
}
