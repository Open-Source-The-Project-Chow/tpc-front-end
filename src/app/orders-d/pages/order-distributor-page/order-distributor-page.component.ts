import {Component, inject} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";
import {MatFormField} from "@angular/material/form-field";
import {MatCardImage, MatCardTitle} from "@angular/material/card";
import {Post} from "../../../forum/model/post.entity";
import {MatDialog} from "@angular/material/dialog";
import {
  OrderDistributorCommentComponent
} from "../../components/order-distributor-comment/order-distributor-comment.component";

@Component({
  selector: 'app-order-distributor-page',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    MatIconButton,
    NgForOf,
    NgIf,
    MatToolbar,
    MatFormField,
    MatCardImage,
    MatCardTitle
  ],
  templateUrl: './order-distributor-page.component.html',
  styleUrl: './order-distributor-page.component.css'
})
export class OrderDistributorPageComponent {
  private dialog: MatDialog = inject(MatDialog);
  openCreatePostDialog(): void {
    const dialogRef = this.dialog.open(OrderDistributorCommentComponent, {
      width: '50%',
      height: 'fit-content',
      data: { post: new Post({}), editMode: false },
      disableClose: false,
      panelClass: 'custom-dialog-container'
    });
  }

}
