import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Profile} from "../model/profile.entity";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService<Profile> {

  constructor() {
    super();
    this.resourceEndpoint = '/profile';
  }
  getProfileById(id: string): Observable<any> {
    return this.getById(id);
  }
  getProfileByUsername(username: string): Observable<any> {
    return this.http.get<Profile>(`${this.resourcePath()}/username/${username}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
