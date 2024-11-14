import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Order} from "../../model/order.entity";
import {OrderService} from "../../services/order.service";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardImage, MatCardTitle} from "@angular/material/card";
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";


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
    NgIf,
    NgClass,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
  ],
  templateUrl: './product-info-view.component.html',
  styleUrl: './product-info-view.component.css'
})
export class ProductInfoViewComponent implements OnInit {
  order!: Order;
  editableComment!: string;
  editableTitle!: string;
  isEditMode: boolean = false; // Controla el modo de edición
  selectedStatus: string = ''; // Almacena el estado seleccionado
  constructor(private route: ActivatedRoute, private orderService: OrderService) {}
  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    if (orderId) {
      this.orderService.getOrderById(orderId).subscribe(order => {
        this.order = order;
        this.editableComment = order.comment;
        this.editableTitle= order.title;
        this.selectedStatus = order.status || 'En progreso'; // Estado inicial
      });
    }
  }
  updateOrder(): void {
    this.order.comment = this.editableComment;
    this.order.title = this.editableTitle;
    this.order.status = this.selectedStatus; // Actualiza el estado seleccionado
    this.orderService.partialUpdateOrder(this.order).subscribe(
      response => {
        console.log('Comentario actualizado');
      },
      error => {
        console.error('Error al actualizar el comentario', error);
      }
    );
  }
  toggleEditMode(): void {
    if (this.isEditMode) {
      this.updateOrder(); // Actualiza la orden si el modo edición está activo
    }
    this.isEditMode = !this.isEditMode; // Cambia el modo de edición
  }

  handleToggleClick(): void {
    this.toggleEditMode();
  }
  selectStatus(status: string): void {
    this.selectedStatus = status; // Guarda el estado seleccionado
  }

}
