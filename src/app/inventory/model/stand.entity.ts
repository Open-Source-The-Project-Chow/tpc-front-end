import { Material } from './material.entity';

export class Stand {
  id: number;
  standName: string;
  materials: Material[];

  constructor(stand: { id?: number; standName?: string; materials?: Material[] }) {
    this.id = stand.id || 0;
    this.standName = stand.standName || '';
    this.materials = stand.materials || [];
  }
}
