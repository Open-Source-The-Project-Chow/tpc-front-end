export class Post {
  id: number;
  userName: string;
  title: string;
  date: string;
  content: string;

  constructor(post: { id?: number, userName?: string, title?: string, date?: string, content?: string}) {
    this.id = post.id || 0;
    this.userName = post.userName || "";
    this.title = post.title || '';
    this.date = post.date || '';
    this.content = post.content || '';
  }
}
