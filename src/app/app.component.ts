import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, RouterLink, MatAnchor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tpc-front-end';
  protected options = [
    {path: '/item', title: 'Items'},
    {path: '/inventory', title: 'Inventory'},
    {path: '/forum', title: 'Forum'},
    {path: '/profile', title: 'Profile'},
    ]
}
