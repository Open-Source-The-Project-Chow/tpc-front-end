export class Order {
  id: number;
  itemName: string;
  image: string;
  thingImage: string;
  timer: string;
  artisanName: string;
  comment: string;

  constructor(order: { id?: number, itemName?: string, image?: string, thingImage?: string, timer?: string, artisanName?: string, comment?: string}) {
    this.id = order.id || 0;
    this.itemName = order.itemName || "";
    this.image = order.image || '';
    this.thingImage = order.thingImage || '';
    this.timer = order.timer || '';
    this.artisanName = order.artisanName || '';
    this.comment = order.comment || '';
  }
}
