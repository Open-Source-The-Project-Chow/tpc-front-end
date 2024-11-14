import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Comment } from '../model/comment.entity'; // Adjust the import path as needed
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService extends BaseService<Comment> {
  constructor() {
    super();
    this.resourceEndpoint = '/comments';
  }

  getCommentsByPostId(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.basePath  }${this.resourceEndpoint}/post/${postId}`);
  }
}
