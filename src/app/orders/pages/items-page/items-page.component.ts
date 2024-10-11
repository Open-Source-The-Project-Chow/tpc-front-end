import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {PostItemComponent} from "../../../forum/components/post-item/post-item.component";
import {MatTableDataSource} from "@angular/material/table";
import {Order} from "../../model/order.entity";
import {ProductCardComponent} from "../../components/product-card/product-card.component";
import {MatDialog, MatDialogActions} from '@angular/material/dialog';
import {OrderService} from "../../services/order.service";

import {ProductCardCreateComponent} from "../../components/produc-card-create/product-card-create.component";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-items-page',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    PostItemComponent,
    ProductCardComponent,
    MatDialogActions,
    MatButton
  ],

  templateUrl: './items-page.component.html',
  styleUrl: './items-page.component.css'
})
export class ItemsPageComponent implements OnInit {
  protected orderData!: Order;
  private orderService: OrderService = inject(OrderService);
  protected dataSource: MatTableDataSource<Order> = new MatTableDataSource<Order>();
  private dialog: MatDialog = inject(MatDialog);

  constructor() {
    this.dataSource = new MatTableDataSource();
    console.log(this.orderService);
  }
  private getAllOrders() {
    this.orderService.getAll().subscribe((response: Order[]) => {
      this.dataSource.data = response;
      console.log(this.dataSource.data);
    });
  }
  ngOnInit(): void {
    this.getAllOrders();
  }
  openCreateOrderDialog(): void {
    const dialogRef = this.dialog.open(ProductCardCreateComponent, {
      width: '50%',
      height: '40%',
      data: { post: new Order({}) },
      disableClose: false,
      panelClass: 'custom-dialog-container'
    });
    dialogRef.componentInstance.orderAddRequested.subscribe((order: Order) => {
      this.onOrderAddRequested(order); // Llama a tu método con el nuevo pedido
    });
  }
  protected onOrderAddRequested(item: Order) {
    this.orderData = item;
    this.createOrder();
  }
  private createOrder() {
    this.orderService.create(this.orderData).subscribe((response: Order) => {
      this.dataSource.data.push(response);
      this.dataSource.data = this.dataSource.data;
    });
  }
}
