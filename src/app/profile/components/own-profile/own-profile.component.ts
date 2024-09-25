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
import {RouterLink} from "@angular/router";
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-own-profile',
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
  templateUrl: './own-profile.component.html',
  styleUrl: './own-profile.component.css'
})
export class OwnProfileComponent {
  @Input() profile!: Profile;
  constructor(private profileService: ProfileService) {
    this.profileService.getProfileById("1").subscribe(profile => {
      this.profile = profile;
    });
  }
}
