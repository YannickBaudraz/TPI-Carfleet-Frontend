import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { API_COMPANIES_URL, API_DRIVERS_URL, API_VEHICLES_URL } from '../../constants';
import { PathLink } from '../../enums/path-link.enum';
import { BackendResponse } from '../../models/backend/backend-response';
import { AbstractDto } from '../../models/backend/dto';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private _httpClient: HttpClient) { }

  private static getUrlByDtoType(pathLink: PathLink): string {
    let apiUrl = '';

    switch (pathLink) {
      case PathLink.DRIVERS:
        apiUrl = API_DRIVERS_URL;
        break;
      case PathLink.VEHICLES:
        apiUrl = API_VEHICLES_URL;
        break;
      case PathLink.COMPANIES:
        apiUrl = API_COMPANIES_URL;
        break;
    }

    return apiUrl;
  }

  getAll(pathLink: PathLink): Observable<AbstractDto[]> {
    const requestUrl = ApiService.getUrlByDtoType(pathLink);

    return this._httpClient.get<BackendResponse>(requestUrl + '/all').pipe(
      take(1),
      map((response: BackendResponse) => response.data as AbstractDto[])
    );
  }

  getOneById(pathLink: PathLink, id: number): Observable<AbstractDto> {
    const requestUrl = `${ApiService.getUrlByDtoType(pathLink)}/${id}`;

    return this._httpClient.get<BackendResponse>(`${requestUrl}`).pipe(
      take(1),
      map(response => response.data as AbstractDto)
    );
  }
}
