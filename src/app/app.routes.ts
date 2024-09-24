
import { Routes } from '@angular/router';

import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {PostManagementComponent} from "./forum/pages/post-management/post-management.component";
import {PostViewComponent} from "./forum/components/post-view/post-view.component";
import {OwnProfileComponent} from "./profile/components/own-profile/own-profile.component";
import {SusbcriptionsComponent} from "./profile/components/susbcriptions/susbcriptions.component";
import {MaterialManagementComponent} from "./inventory/pages/material-management/material-management.component";
import {OrderDistributorPageComponent} from "./orders-d/pages/order-distributor-page/order-distributor-page.component";
import {ProductListComponent} from "./Order/components/product-list/product-list.component";


export const routes: Routes = [
  { path: 'item', component: OrderDistributorPageComponent},
  { path: 'item/view', component: OrderDistributorPageComponent},
  { path: 'inventory', component: MaterialManagementComponent},
  { path: 'profile', component: OwnProfileComponent},
  { path: 'forum', component: PostManagementComponent},
  { path: 'subscriptions', component: SusbcriptionsComponent},
  { path: 'post-view/:id', component: PostViewComponent },
  { path: '',                 redirectTo: 'item', pathMatch: 'full'},
  { path: '**',               component: PageNotFoundComponent}
];
