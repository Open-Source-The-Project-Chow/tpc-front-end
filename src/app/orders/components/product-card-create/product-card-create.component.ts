import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {Post} from "../../../forum/model/post.entity";
import {Order} from "../../model/order.entity";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-product-card-create',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatButton,
    MatDialogContent,
    MatDialogActions,
    MatError,
    MatIcon,
    MatIconButton,
    NgIf,
    MatInput,
    MatFormField
  ],
  templateUrl: './product-card-create.component.html',
  styleUrl: './product-card-create.component.css'
})
export class ProductCardCreateComponent {
  @Input() order!: Order;
  @Output() orderAddRequested = new EventEmitter<Order>();
  @ViewChild('orderForm', {static: false}) protected orderForm!: NgForm;
  constructor(private dialogRef: MatDialogRef<ProductCardCreateComponent>) {
    this.order = new Order({});
  }
  private isValid = () => this.orderForm.valid;
  protected onClose() {
    this.dialogRef.close();
  }
  protected onSubmit() {
    if (this.isValid()) {
      let emitter =  this.orderAddRequested;
      emitter.emit(this.order);
    } else {
      console.error('Invalid form data');
    }
  }
}
