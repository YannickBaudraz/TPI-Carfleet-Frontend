import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { API_COMPANIES_URL, API_DRIVERS_URL, API_VEHICLES_URL } from '../../constants';
import { PathLink } from '../../enums/path-link.enum';
import { BackendResponse } from '../../models/backend/backend-response';
import { DataTransferObject } from '../../models/backend/data-transfer-object';

/**
 * Api service fot HTTP request to the backend.
 */
@Injectable({ providedIn: 'root' })
export class ApiService {

  //region Constructors
  /**
   * Initialize an api service.
   *
   * @param _httpClient - Client to make HTTP request.
   */
  constructor(private _httpClient: HttpClient) { }
  //endregion

  //region Methods
  //region Static methods
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
  //endregion

  //region Instance methods
  /**
   * Performs a HTTP request to get an array of all objects wanted.
   *
   * @param pathLink - Path link of the api, for the url.
   *
   * @return Observable of a DTO's array.
   */
  getAll(pathLink: PathLink): Observable<DataTransferObject[]> {
    const requestUrl = ApiService.getUrlByDtoType(pathLink);

    return this._httpClient.get<BackendResponse>(requestUrl + '/all').pipe(
      take(1),
      map((response: BackendResponse) => response.data as DataTransferObject[])
    );
  }

  /**
   * Performs a HTTP request to get the object wanted by id.
   *
   * @param pathLink - Path link of the api, for the url.
   * @param id - Unique identifier.
   *
   * @return Observable of a DTO.
   */
  getOneById(pathLink: PathLink, id: number): Observable<DataTransferObject> {
    const requestUrl = `${ApiService.getUrlByDtoType(pathLink)}/${id}`;

    return this._httpClient.get<BackendResponse>(`${requestUrl}`).pipe(
      take(1),
      map(response => response.data as DataTransferObject)
    );
  }
  //endregion
  //endregion
}
