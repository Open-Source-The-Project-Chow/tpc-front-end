import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true
})
export class ProductListComponent {
  // Simula una lista de productos
  products = [
    { id: 1, title: 'Collares cerámica', score: '10/10', name: 'Juan Pérez' },
    // otros productos...
  ];

  // Método para manejar el clic en Revisar
  onReviewClick({product}: { product: any }): void {
    console.log('Revisar producto:', product);
    // Aquí puedes agregar lógica para abrir una página de detalles o un modal
    alert('Revisando producto: ' + product.title);
  }
}
