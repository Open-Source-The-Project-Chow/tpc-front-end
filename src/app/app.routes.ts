import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {PostManagementComponent} from "./forum/pages/post-management/post-management.component";
import {PostViewComponent} from "./forum/components/post-view/post-view.component";
import {MaterialManagementComponent} from "./inventory/pages/material-management/material-management.component";

export const routes: Routes = [
  { path: 'item', component: PageNotFoundComponent},
  { path: 'inventory', component: MaterialManagementComponent},
  { path: 'profile', component: PageNotFoundComponent},
  { path: 'forum', component: PostManagementComponent},
  { path: 'post-view/:id', component: PostViewComponent },
  { path: '',                 redirectTo: 'item', pathMatch: 'full'},
  { path: '**',               component: PageNotFoundComponent}
];
