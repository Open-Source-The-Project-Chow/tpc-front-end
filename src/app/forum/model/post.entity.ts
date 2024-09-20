export class Post {
  id: number;
  userName: string;
  image: string;
  title: string;
  date: string;
  thingImage: string;
  content: string;

  constructor(post: { id?: number, userName?: string, image?: string, title?: string, date?: string, thingImage?: string, content?: string}) {
    this.id = post.id || 0;
    this.userName = post.userName || "";
    this.image = post.image || '';
    this.title = post.title || '';
    this.date = post.date || '';
    this.thingImage = post.thingImage || '';
    this.content = post.content || '';
  }
}
