import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {PostManagementComponent} from "./forum/pages/post-management/post-management.component";
import {PostViewComponent} from "./forum/components/post-view/post-view.component";
import {OwnProfileComponent} from "./profile/components/own-profile/own-profile.component";
import {SusbcriptionsComponent} from "./profile/components/susbcriptions/susbcriptions.component";
import {MaterialManagementComponent} from "./inventory/pages/material-management/material-management.component";
import {LoginComponent} from "./public/pages/login/login.component";
import {ItemsPageComponent} from "./orders/pages/items-page/items-page.component";
import {ProductInfoViewComponent} from "./orders/pages/product-info-view/product-info-view.component";



export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'craftsman/orders', component: ItemsPageComponent},
  { path: 'craftsman/orders/product-info/:id', component: ProductInfoViewComponent},
  { path: 'inventory', component: MaterialManagementComponent},
  { path: 'forum', component: PostManagementComponent},
  { path: 'forum/post-view/:id', component: PostViewComponent},
  { path: 'profile', component: OwnProfileComponent},
  { path: 'subscriptions', component: SusbcriptionsComponent },
  { path: '',                 redirectTo: 'login', pathMatch: 'full'},
  { path: '**',               component: PageNotFoundComponent}
];
