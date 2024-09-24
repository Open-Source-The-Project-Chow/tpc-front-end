export class Post {
  id: number;
  title: string;
  image: string;
  craftsman: string;
  distributor: string;
  amount: number;
  deadline: Date;
  status: string;
  comment: string;
  comment_date: Date;

  constructor(order:{id?: number,
    title?: string,
    image?: string,
    craftsman?: string,
    distributor?: string,
    amount?: number,
    deadline?: Date,
    status?: string,
    comment?: string,
    comment_date?: Date}
                = {}
  ) {
    this.id = order.id|| 0;
    this.title = order.title|| '';
    this.image = order.image|| '';
    this.craftsman = order.craftsman|| '';
    this.distributor = order.distributor|| '';
    this.amount = order.amount|| 0;
    this.deadline = order.deadline|| new Date();
    this.status = order.status|| '';
    this.comment = order.comment|| '';
    this.comment_date = order.comment_date|| new Date();
  }
}
