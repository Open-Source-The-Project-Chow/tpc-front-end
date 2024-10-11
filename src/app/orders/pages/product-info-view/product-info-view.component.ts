import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Order} from "../../model/order.entity";
import {OrderService} from "../../services/order.service";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardImage, MatCardTitle} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-product-info-view',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCardImage,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardTitle,
    RouterLink,
    MatFormField,
    MatInput,
    FormsModule,
  ],
  templateUrl: './product-info-view.component.html',
  styleUrl: './product-info-view.component.css'
})
export class ProductInfoViewComponent implements OnInit {
order!: Order;
editableComment!: string;
  constructor(private route: ActivatedRoute, private orderService: OrderService) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    if (orderId) {
      this.orderService.getOrderById(orderId).subscribe(order => {
        this.order = order;
        this.editableComment = order.comment;
      });
    }
  }
  actualizarComentario(): void {
    this.order.comment = this.editableComment;
    this.orderService.updateCommentOrder(this.order).subscribe(
      response => {
        console.log('Comentario actualizado');
      },
      error => {
        console.error('Error al actualizar el comentario', error);
      }
    );
  }
}
