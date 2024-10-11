import { Component, HostListener, OnInit } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filterVisible: boolean = false;
  filterOptions: string[] = ['Cantidad', 'Fecha', 'Nombre', 'Creador'];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      { id: 1, image: 'https://i.etsystatic.com/9090571/r/il/4c0e26/822807347/il_1140xN.822807347_u4uo.jpg', quantity: '10/10', date: '02/09/24', name: 'Collares cerámica', creator: 'Juan Pérez', action: 'Revisar' },
      { id: 2, image: 'https://originaltaste.es/wp-content/uploads/2021/08/Original-Taste-Cumpleanos-0189.jpg', quantity: '0/1', date: '01/13/02:00', name: 'Regalo Cumpleaños', creator: 'Rosario Libertad', action: 'Revisar' },
      { id: 3, image: 'https://th.bing.com/th/id/OIP.O2Bz-RCMcujknrNa2dZBowHaLH?rs=1&pid=ImgDetMain', quantity: '5/5', date: '10/11/23', name: 'Jarrones artesanales', creator: 'María Sánchez', action: 'Revisar' },
      { id: 4, image: 'https://i.etsystatic.com/28082490/r/il/744343/3080675147/il_1588xN.3080675147_919r.jpg', quantity: '3/7', date: '15/10/23', name: 'Pulseras de cuero', creator: 'Pedro Gómez', action: 'Revisar' },
      { id: 5, image: 'https://th.bing.com/th/id/R.21a670235a8e6b23a8444d86d7ba4213?rik=%2fgWurQ6doDcmCw&riu=http%3a%2f%2fwww.lornabenavides.com%2fwp-admin%2fwp-content%2fuploads%2f2015%2f09%2fIMG_2360.jpg&ehk=Q8Q8JxZ2ytLP5EKX%2bu7DiFYtFwMEhPFX556If7zOuMk%3d&risl=&pid=ImgRaw&r=0', quantity: '2/8', date: '05/11/23', name: 'Esculturas de madera', creator: 'Ana López', action: 'Revisar' },
      { id: 6, image: 'https://1.bp.blogspot.com/-RRGCiHP0Dz0/Xe44jW-jgRI/AAAAAAAAa7Y/CQ2A2Zho1hsvKsbxOcWL6-APrwGL6Al_gCLcBGAsYHQ/s1600/IMG-20191121-WA0014_Original.jpg', quantity: '0/3', date: '07/12/23', name: 'Cuadros pintados a mano', creator: 'Carlos Ortega', action: 'Revisar' },
      { id: 7, image: 'https://mitonala.mx/wp-content/uploads/2019/01/153-960x960.jpg', quantity: '9/9', date: '25/09/23', name: 'Vasos de cerámica', creator: 'Sofía Martínez', action: 'Revisar' },
      { id: 8, image: 'https://artenet.es/media/reviews/photos/original/24/80/d9/13263-lampara-aristica-artesanal-8-1508260702.jpg', quantity: '4/4', date: '12/08/23', name: 'Lámparas decorativas', creator: 'Javier Ruiz', action: 'Revisar' },
      { id: 9, image: 'https://th.bing.com/th/id/OIP.0i5enZrkiph3XZKe7RwQkAHaF2?rs=1&pid=ImgDetMain', quantity: '6/6', date: '28/09/23', name: 'Joyería de plata', creator: 'Lucía Fernández', action: 'Revisar' },
      { id: 10, image: 'https://th.bing.com/th/id/OIP.gZr4IaMrofblDW5FSOcmzgHaE8?rs=1&pid=ImgDetMain', quantity: '8/10', date: '01/10/23', name: 'Sombreros de paja', creator: 'Ricardo Morales', action: 'Revisar' }
    ];
  }

  toggleFilterMenu() {
    this.filterVisible = !this.filterVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.filter-search-container')) {
      this.filterVisible = false;
    }
  }
}
