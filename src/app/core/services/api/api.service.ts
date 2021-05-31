import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { API_COMPANIES_URL, API_DRIVERS_URL, API_USERS_URL, API_VEHICLES_URL } from '../../constants';
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
   * Instantiate an api service.
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
      case PathLink.Drivers:
        apiUrl = API_DRIVERS_URL;
        break;
      case PathLink.Vehicles:
        apiUrl = API_VEHICLES_URL;
        break;
      case PathLink.Companies:
        apiUrl = API_COMPANIES_URL;
        break;
      case PathLink.Users:
        apiUrl = API_USERS_URL;
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
    const requestUrl = `${ApiService.getUrlByDtoType(pathLink)}/all`;

    return this._httpClient.get<BackendResponse>(requestUrl).pipe(
      first(),
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

    return this._httpClient.get<BackendResponse>(requestUrl).pipe(
      first(),
      map(response => response.data as DataTransferObject)
    );
  }

  /**
   * Performs a HTTP request to post the object wanted.
   *
   * @param pathLink - Path link of the api, for the url.
   * @param dto - The dto sent by the GUI.
   *
   * @return Observable of a DTO.
   */
  saveOne(pathLink: PathLink, dto: DataTransferObject): Observable<DataTransferObject> {
    const requestUrl = `${ApiService.getUrlByDtoType(pathLink)}/save`;

    return this._httpClient.post<BackendResponse>(requestUrl, dto).pipe(
      first(),
      map(response => response.data as DataTransferObject)
    );
  }

  /**
   * Performs a HTTP request to put the object wanted.
   *
   * @param pathLink - Path link of the api, for the url.
   * @param dto - The dto sent by the GUI.
   *
   * @return Observable of a DTO.
   */
  updateOne(pathLink: PathLink, dto: DataTransferObject): Observable<DataTransferObject> {
    const requestUrl = `${ApiService.getUrlByDtoType(pathLink)}/update`;

    return this._httpClient.put<BackendResponse>(requestUrl, dto).pipe(
      first(),
      map(response => response.data as DataTransferObject)
    );
  }
  //endregion
  //endregion
}
