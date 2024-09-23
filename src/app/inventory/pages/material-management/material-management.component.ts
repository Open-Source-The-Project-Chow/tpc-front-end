import {Component, inject, OnInit} from '@angular/core';
import {MaterialService} from "../../services/material.service";
import {Material} from "../../model/material.entity";
import {MaterialListComponent} from "../../components/material-list/material-list.component";

@Component({
  selector: 'app-material-management',
  standalone: true,
  imports: [
    MaterialListComponent
  ],
  templateUrl: './material-management.component.html',
  styleUrl: './material-management.component.css'
})
export class MaterialManagementComponent implements OnInit {

  //#region Attributes
  protected materialData!: Material;
  protected materials: Array<Material> = [];
  private materialService: MaterialService = inject(MaterialService);

  constructor() {
    this.materialData = new Material({});
  }

  ngOnInit(): void {
    this.getAllMaterials();
  }

  private getAllMaterials() {
    this.materialService.getAll().subscribe((response: Array<Material>) => this.materials = response);
  }

}
