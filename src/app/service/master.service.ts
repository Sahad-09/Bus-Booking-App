import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILocations } from '../model/interface/search';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiURL: string = "https://projectapi.gerasim.in/api/BusBooking/"

  constructor(private http: HttpClient) { }

  getLocations(): Observable<ILocations[]> {
    return this.http.get<ILocations[]>(this.apiURL + "GetBusLocations")
  }

  serachBus(from: number, to: number, travelDate: string): Observable<ILocations[]> {
    return this.http.get<ILocations[]>(`${this.apiURL}searchBus?fromLocation=${from}&toLocation=${to}&travelDate=${travelDate}`)
  }

}
