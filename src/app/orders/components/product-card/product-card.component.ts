import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MatCard, MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle, MatCardTitleGroup
} from "@angular/material/card";

import {Order} from "../../model/order.entity";
import {NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardAvatar,
    MatCardContent,
    MatCardImage,
    MatCardTitle,
    MatCardHeader,
    MatCardActions,
    NgStyle,
    RouterLink
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() order!: Order;
}
