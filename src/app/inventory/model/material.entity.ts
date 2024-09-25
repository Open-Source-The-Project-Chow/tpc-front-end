export class Material {
  id: number;
  name: string;
  quantity: number;
  stand: string;

  constructor( material: { id?: number, name?: string, quantity?: number, stand?: string }) {
    this.id = material.id || 0;
    this.name = material.name || "";
    this.quantity = material.quantity || 0;
    this.stand = material.stand || "";
  }
}
