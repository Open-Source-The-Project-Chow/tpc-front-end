import {Component, Input} from '@angular/core';
import {Material} from "../../model/material.entity";
import {MatCard, MatCardActions, MatCardHeader, MatCardTitleGroup} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-material-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardActions,
    MatButton
  ],
  templateUrl: './material-item.component.html',
  styleUrl: './material-item.component.css'
})
export class MaterialItemComponent {
  // #region Attributes
  @Input() material!: Material;
}
