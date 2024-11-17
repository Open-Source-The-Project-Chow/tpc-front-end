import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {ProductCardComponent} from "../../components/product-card/product-card.component";
import {RouterLink} from "@angular/router";
import {ProfileCardComponent} from "../../components/profile-card/profile-card.component";
import {Order} from "../../model/order.entity";
import {OrderService} from "../../services/order.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {Profile} from "../../../profile/model/profile.entity";
import {ProfileService} from "../../../profile/services/profile.service";

@Component({
  selector: 'app-distributor-list',
  standalone: true,
  imports: [
    MatButton,
    NgForOf,
    NgIf,
    ProductCardComponent,
    RouterLink,
    ProfileCardComponent
  ],
  templateUrl: './distributor-list.component.html',
  styleUrl: './distributor-list.component.css'
})
export class DistributorListComponent implements OnInit{
  private profileService: ProfileService = inject(ProfileService);
  protected dataSource: MatTableDataSource<Profile> = new MatTableDataSource<Profile>();

  constructor() {
    this.dataSource = new MatTableDataSource();
    console.log(this.profileService);
  }
  private getAllProfiles() {
    this.profileService.getAll().subscribe((response: Profile[]) => {
      this.dataSource.data = response;
      console.log(this.dataSource.data);
    });
  }
  ngOnInit(): void {
    this.getAllProfiles();
  }
}
