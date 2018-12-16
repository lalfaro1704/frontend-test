// standard libraries
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// global settings variables
import { GlobalSettings } from './global.settings';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private globalSettings: GlobalSettings) { }

  getMenu(): Observable<any> {
    return this.http.get<any>(
      this.globalSettings.baseUrl + '/menu/api/menu/'
    ).pipe(
      map((response: Response) => <any>response['results'][0])
    );
  }

  getMenuById(id: string): Observable<any> {
    return this.http.get<any>(
      this.globalSettings.baseUrl + '/menu/api/menu/' + id + '/'
    );
  }

  getPreparationsByLunch(id: string): Observable<any> {
    return this.http.get<any>(
      this.globalSettings.baseUrl + '/menu/api/preparation/?lunch=' + id
    ).pipe(
      map((response: Response) => <any>response['results'])
    );
  }

  getIngredientsByPreparation(id: string): Observable<any> {
    return this.http.get<any>(
      this.globalSettings.baseUrl + '/menu/api/ingredient/?preparation=' + id
    ).pipe(
      map((response: Response) => <any>response['results'])
    );
  }

  postOrder(body: any): Observable<any> {
    return this.http.post<any>(
      this.globalSettings.baseUrl + '/menu/api/order/',
      body
    );
  }
}
