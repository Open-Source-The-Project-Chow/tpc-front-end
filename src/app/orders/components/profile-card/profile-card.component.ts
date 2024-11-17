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

import {Profile} from "../../../profile/model/profile.entity";
import {NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-profile-card',
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
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}
