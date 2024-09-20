import {Component, Input} from '@angular/core';
import {Post} from "../../model/post.entity";
import {
  MatCard, MatCardAvatar,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {NgStyle} from "@angular/common";

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
    MatCardImage
  ],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})
export class PostItemComponent {
  @Input() post!: Post;
}
