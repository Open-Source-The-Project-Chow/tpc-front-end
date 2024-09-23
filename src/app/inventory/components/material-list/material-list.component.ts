import {Component, Input} from '@angular/core';
import {Material} from "../../model/material.entity";
import {MaterialItemComponent} from "../material-item/material-item.component";

@Component({
  selector: 'app-material-list',
  standalone: true,
  imports: [
    MaterialItemComponent
  ],
  templateUrl: './material-list.component.html',
  styleUrl: './material-list.component.css'
})
export class MaterialListComponent {
  title = 'Material List';
  @Input() materials!: Array<Material>
}
