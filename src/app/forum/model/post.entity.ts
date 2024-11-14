export class Post {
  id: number;
  title: string;
  content: string;
  image: string;
  constructor(post: { id?: number, title?: string, content?: string, image?: string}) {
    this.id = post.id || 0;
    this.image = post.image || '';
    this.title = post.title || '';
    this.content = post.content || '';
  }
}
