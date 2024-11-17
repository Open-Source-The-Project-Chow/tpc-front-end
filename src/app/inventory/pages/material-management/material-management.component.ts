import { Component, inject, OnInit } from '@angular/core';
import { StandService } from '../../services/stand.service';
import { Stand } from '../../model/stand.entity';
import { StandListComponent } from '../../components/stand-list/stand-list.component';

@Component({
  selector: 'app-material-management',
  standalone: true,
  templateUrl: './material-management.component.html',
  styleUrls: ['./material-management.component.css'],
  imports: [
    StandListComponent
  ]
})
export class MaterialManagementComponent implements OnInit {
  stands: Stand[] = []; // Propiedad para almacenar los stands

  private standService: StandService = inject(StandService);

  ngOnInit(): void {
    this.loadStands();
  }

  // Cargar los stands desde el servicio
  private loadStands() {
    this.standService.getAllStands().subscribe(
      (data) => {
        this.stands = data;
      },
      (error) => {
        console.error('Error fetching stands:', error);
      }
    );
  }
}
