// src/app/forum/model/comment.entity.ts
export class Comment {
  id: number;
  content: string;
  postId: number;
  author: string;

  constructor(comment: { id?: number, content?: string, postId?: number, username?: string }) {
    this.id = comment.id || 0;
    this.content = comment.content || '';
    this.postId = comment.postId || 0;
    this.author = comment.username || '';
  }
}
