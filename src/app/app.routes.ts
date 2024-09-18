import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {PostManagementComponent} from "./forum/pages/post-management/post-management.component";

export const routes: Routes = [
  { path: 'item', component: PageNotFoundComponent},
  { path: 'inventory', component: PostManagementComponent},
  { path: 'profile', component: PostManagementComponent},
  { path: 'forum', component: PostManagementComponent},
  { path: '',                 redirectTo: 'forum', pathMatch: 'full'},
  { path: '**',               component: PageNotFoundComponent}
];
