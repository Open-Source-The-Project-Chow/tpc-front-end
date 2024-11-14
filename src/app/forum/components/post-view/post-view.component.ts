import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.entity';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import { MatCard, MatCardAvatar, MatCardContent, MatCardImage, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../model/comment.entity';

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
    RouterLink,
    NgForOf
  ],
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  post!: Post;
  comments: Comment[] = [];

  constructor(private route: ActivatedRoute, private postService: PostService, private commentService: CommentService) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.postService.getPostById(postId).subscribe(post => {
        this.post = post;
        this.loadComments(post.id);
      });
    }
  }

  loadComments(postId: number): void {
    this.commentService.getCommentsByPostId(postId).subscribe(comments => {
      this.comments = comments;
    });
  }
}
