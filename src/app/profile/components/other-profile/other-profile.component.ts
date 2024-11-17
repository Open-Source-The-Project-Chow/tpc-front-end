import {Component, Input} from '@angular/core';
import {Profile} from "../../model/profile.entity";
import {
  MatCard, MatCardActions, MatCardAvatar,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {NgStyle} from "@angular/common";
import {MatAnchor, MatButton} from "@angular/material/button";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ProfileService} from "../../services/profile.service";
import {OrderService} from "../../../orders/services/order.service";

@Component({
  selector: 'app-other-profile',
  standalone: true,
  imports: [
    MatCardTitle,
    MatCardTitleGroup,
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatCardAvatar,
    NgStyle,
    MatCardImage,
    MatCardActions,
    MatButton,
    RouterLink,
    MatAnchor
  ],
  templateUrl: './other-profile.component.html',
  styleUrl: './other-profile.component.css'
})
export class OtherProfileComponent {
  @Input() profile!: Profile;
  items!: number;
  constructor(private route: ActivatedRoute, private profileService: ProfileService, private orderService: OrderService) {}
  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    this.items = 1;
    if (orderId) {
      this.profileService.getProfileById(orderId).subscribe(profile => {
        this.profile = profile;
      });
      //this.orderService.getOrderByUsername(this.profile.firstName).subscribe(order => {this.items = this.items + 1;});
    }
  }
  }

