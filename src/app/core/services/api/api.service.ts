import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { API_VEHICLES_URL } from '../../constants';
import { BackendResponse } from '../../models/backend/backend-response';
import { Vehicle } from '../../models/backend/dto';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.httpClient.get<BackendResponse>(API_VEHICLES_URL).pipe(
      take(1),
      map((response: BackendResponse) => response.data as Vehicle[])
    );
  }

  getOneVehicle(id: number): Observable<Vehicle> {
    return this.httpClient.get<BackendResponse>(`${API_VEHICLES_URL}/${id}`).pipe(
      take(1),
      map(response => response.data as Vehicle)
    );
  }
}
