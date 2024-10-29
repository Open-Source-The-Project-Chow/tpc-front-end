import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Order} from "../model/order.entity";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Order>{

  constructor() {
    super();
    this.resourceEndpoint = '/order';
  }
  getOrderById(id: string): Observable<Order> {
    return this.getById(id);
  }
  //ajustate de base service
  updateCommentOrder(order: Order): Observable<Order> {
    return this.partialUpdate(order.id, order);  // Aquí usamos PUT
  }

}
