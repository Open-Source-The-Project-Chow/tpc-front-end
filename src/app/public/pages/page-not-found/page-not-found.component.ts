import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit{

  protected invalidPath: string;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);


  constructor() {
    this.invalidPath = '';
  }

  ngOnInit(): void {
    this.invalidPath = window.location.pathname;
  }
  protected onNavigateHome() {
    this.router.navigate(['forum']).then();
  }
}
