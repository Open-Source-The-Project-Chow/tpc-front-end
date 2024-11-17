import { Component, Input, OnInit } from '@angular/core';
import { StandService } from '../../services/stand.service';
import { Stand } from '../../model/stand.entity';
import { Material } from '../../model/material.entity';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-stand-list',
  standalone: true,
  templateUrl: './stand-list.component.html',
  styleUrls: ['./stand-list.component.css'],
  imports: [NgForOf, NgIf, FormsModule],
})
export class StandListComponent implements OnInit {
  @Input() stands: Stand[] = []; // Entrada de stands
  selectedMaterial: Material | null = null; // Material seleccionado
  isAddMaterialModalOpen: boolean = false; // Controla si el modal de añadir material está abierto
  newMaterialName: string = ''; // Nombre del nuevo material
  newMaterialQuantity: number | null = null; // Cantidad del nuevo material
  selectedStandId: number | null = null; // ID del stand seleccionado para añadir material
  newStandName: string = ''; // Nombre del nuevo stand

  constructor(private standService: StandService) {}

  ngOnInit(): void {
    console.log('Stands loaded:', this.stands);
  }

  // Abrir modal de añadir material
  openAddMaterialModal(standId: number | undefined): void {
    if (standId === undefined) {
      console.error('El ID del stand es indefinido. No se puede abrir el modal.');
      return;
    }
    this.isAddMaterialModalOpen = true;
    this.selectedStandId = standId;
  }

  // Cerrar modal de añadir material
  closeAddMaterialModal(): void {
    this.isAddMaterialModalOpen = false;
    this.newMaterialName = '';
    this.newMaterialQuantity = null;
    this.selectedStandId = null;
  }

  // Añadir material al stand
  addMaterialToStand(): void {
    if (this.selectedStandId === null || this.newMaterialName.trim() === '' || this.newMaterialQuantity === null || this.newMaterialQuantity <= 0) {
      alert('Datos inválidos para añadir el material.');
      return;
    }

    const newMaterial: Material = {
      id: 0,
      inventoryId: this.selectedStandId,
      name: this.newMaterialName,
      quantity: this.newMaterialQuantity,
      stand: this.selectedStandId.toString(),
    };

    this.standService.addMaterialToStand(newMaterial).subscribe(
      (addedMaterial) => {
        const stand = this.stands.find((s) => s.id === this.selectedStandId);
        if (stand) {
          stand.materials.push(addedMaterial);
        }
        this.closeAddMaterialModal();
        console.log('Material añadido:', addedMaterial);
      },
      (error) => {
        console.error('Error al añadir el material:', error);
      }
    );
  }

  // Abrir modal de detalles del material
  openMaterialDetails(material: Material): void {
    this.selectedMaterial = material;
  }

  // Cerrar modal de detalles del material
  closeModal(): void {
    this.selectedMaterial = null;
  }

  // Eliminar material
  deleteMaterial(materialId: number | undefined): void {
    if (materialId === undefined) {
      console.error('El ID del material es indefinido. No se puede eliminar.');
      return;
    }

    this.standService.deleteMaterial(materialId).subscribe(
      () => {
        // Verificar si `selectedMaterial` no es null o undefined y tiene un stand válido
        const standId = this.selectedMaterial?.stand;
        if (standId) {
          const stand = this.stands.find((s) => s.id === +standId);
          if (stand) {
            stand.materials = stand.materials.filter((m) => m.id !== materialId);
          }
        }
        this.closeModal();
        console.log('Material eliminado correctamente.');
      },
      (error) => {
        console.error('Error al eliminar el material desde el backend:', error);
      }
    );
  }

  // Añadir un nuevo stand
  addNewStand(): void {
    if (this.newStandName.trim() === '') {
      alert('El nombre del stand no puede estar vacío.');
      return;
    }

    const newStand: Stand = {
      id: 0,
      standName: this.newStandName,
      materials: [],
    };

    this.standService.create(newStand).subscribe(
      (createdStand) => {
        this.stands.push(createdStand);
        this.newStandName = '';
        console.log('Stand creado:', createdStand);
      },
      (error) => {
        console.error('Error al crear el stand:', error);
      }
    );
  }

  // Eliminar un stand
  deleteStand(standId: number): void {
    this.standService.deleteStand(standId).subscribe({
      next: () => {
        this.stands = this.stands.filter((s) => s.id !== standId);
        console.log('Stand eliminado:', standId);
      },
      error: (err) => {
        console.error('Error al eliminar el stand:', err);
        alert('No se pudo eliminar el stand. Por favor, verifica el backend.');
      },
    });
  }

}
