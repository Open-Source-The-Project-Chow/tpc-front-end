import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {Order} from "../../model/order.entity";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-order-distributor-comment',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatDialogContent,
    MatError,
    MatIcon,
    MatIconButton,
    NgIf,
    MatFormField,
    MatInput
  ],
  templateUrl: './order-distributor-comment.component.html',
  styleUrl: './order-distributor-comment.component.css'
})
export class OrderDistributorCommentComponent {
  @Input() order!: Order;
  @Input() editMode: boolean = false;
  @Output() protected commentUpdateRequested = new EventEmitter<Order>();
  @Output() protected cancelRequested = new EventEmitter<void>();

  @ViewChild('CommentForm', {static: false}) protected commentForm!: NgForm;

  constructor(private dialogRef: MatDialogRef<OrderDistributorCommentComponent>) {
  }

  private resetEditState() {
    this.commentForm.reset();
  }

  private isValid = () => this.commentForm.valid;

  protected isEditMode = (): boolean => this.editMode;

  protected onSubmit() {
    if (this.isValid()) {
      let emitter = this.isEditMode()? this.commentUpdateRequested : this.commentUpdateRequested
      emitter.emit(this.order);
      this.resetEditState();
    } else {
      console.error('Invalid form data');
    }
  }
  protected onClose() {
    this.dialogRef.close();
  }
}
