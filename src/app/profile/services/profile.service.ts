import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Profile} from "../model/profile.entity";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService<Profile> {

  constructor() {
    super();
    this.resourceEndpoint = '/profiles';
  }
  getProfileById(id: string): Observable<Profile> {
    return this.getById(id);
  }
  getProfileByUsername(username: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.resourcePath()}/username/${username}`, this.httpOptions)
      .pipe();
  }
}
