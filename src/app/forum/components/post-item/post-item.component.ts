import {Component, Input} from '@angular/core';
import {Post} from "../../model/post.entity";
import {
  MatCard, MatCardActions, MatCardAvatar,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {NgStyle} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-post-item',
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
    RouterLink
  ],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})
export class PostItemComponent {
  @Input() post!: Post;
}
