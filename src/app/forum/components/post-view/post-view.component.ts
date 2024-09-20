import {Component, OnInit} from '@angular/core';
import {Post} from "../../model/post.entity";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {PostService} from "../../services/post.service";
import {NgOptimizedImage} from "@angular/common";
import {MatCard, MatCardAvatar, MatCardContent, MatCardImage, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCardImage,
    MatButton,
    MatCard,
    MatCardAvatar,
    MatCardContent,
    MatCardTitle,
    RouterLink
  ],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.css'
})
export class PostViewComponent implements OnInit {
  post!: Post;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.postService.getPostById(postId).subscribe(post => {
        this.post = post;
      });
    }
  }
}
