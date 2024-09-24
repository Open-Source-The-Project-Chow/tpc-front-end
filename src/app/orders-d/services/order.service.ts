import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Post} from "../../forum/model/post.entity";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Post>{
  constructor() {
    super();
    this.resourceEndpoint = '/order';
  }
  getOrdertById(id: string): Observable<Post> {
    return this.getById(id);
  }
}
