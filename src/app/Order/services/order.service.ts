import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import Order = jasmine.Order;

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Order>{

  constructor() {
    super();
    this.resourceEndpoint = '/post';
  }
}
