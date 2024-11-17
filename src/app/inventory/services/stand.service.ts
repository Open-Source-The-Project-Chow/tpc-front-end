import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Stand } from '../model/stand.entity';
import { Material } from '../model/material.entity';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StandService extends BaseService<Stand> {
  constructor() {
    super();
    this.resourceEndpoint = '/inventories'; // Endpoint para los stands
  }

  getAllStands(): Observable<Stand[]> {
    return this.getAll(); // Utiliza el método genérico del BaseService
  }

  deleteStand(standId: number): Observable<void> {
    const url = `${this.basePath}/inventories/${standId}`;
    console.log('DELETE URL:', url);
    return this.http.delete<void>(url).pipe(
      catchError((error) => {
        console.error('Error en la solicitud DELETE:', error);
        return throwError(() => new Error('Error al eliminar el stand'));
      })
    );
  }


  addMaterialToStand(material: Material): Observable<Material> {
    const materialEndpoint = `${this.basePath}/materials`;
    return this.http.post<Material>(materialEndpoint, JSON.stringify(material), this.httpOptions)
      .pipe(catchError(this.handleError));
  }


  deleteMaterial(materialId: number): Observable<any> {
    const materialEndpoint = `${this.basePath}/materials/${materialId}`;
    return this.http.delete(materialEndpoint, { responseType: 'text' }).pipe(
      catchError(this.handleError)
    );
  }


}
