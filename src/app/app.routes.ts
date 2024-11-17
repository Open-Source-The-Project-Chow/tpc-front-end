import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {PostManagementComponent} from "./forum/pages/post-management/post-management.component";
import {PostViewComponent} from "./forum/components/post-view/post-view.component";
import {OwnProfileComponent} from "./profile/components/own-profile/own-profile.component";
import {SubscriptionsComponent} from "./profile/components/subscriptions/subscriptions.component";
import {MaterialManagementComponent} from "./inventory/pages/material-management/material-management.component";
import {LoginComponent} from "./public/pages/login/login.component";
import {ItemsPageComponent} from "./orders/pages/items-page/items-page.component";
import {ProductInfoViewComponent} from "./orders/pages/product-info-view/product-info-view.component";
import {SignInPageComponent} from "./iam/pages/sign-in-page/sign-in-page.component";
import {ChooseRolePageComponent} from "./iam/pages/choose-role-page/choose-role-page.component";
import {SignUpCraftsmanPageComponent} from "./iam/pages/sign-up-craftsman-page/sign-up-craftsman-page.component";
import {SignUpBuyerPageComponent} from "./iam/pages/sign-up-buyer-page/sign-up-buyer-page.component";



export const routes: Routes = [
  { path: 'sign-in', component: SignInPageComponent},
  { path: 'choose-role', component: ChooseRolePageComponent },
  { path: 'sign-up-craftsman', component: SignUpCraftsmanPageComponent },
  { path: 'sign-up-buyer', component: SignUpBuyerPageComponent },
  { path: 'home', component: ItemsPageComponent},
  { path: 'craftsman/orders', component: ItemsPageComponent},
  { path: 'craftsman/orders/product-info/:id', component: ProductInfoViewComponent},
  { path: 'inventory', component: MaterialManagementComponent},
  { path: 'forum', component: PostManagementComponent},
  { path: 'forum/post-view/:id', component: PostViewComponent },
  { path: 'profile', component: OwnProfileComponent},
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: '',                 redirectTo: 'sign-in', pathMatch: 'full'},
  { path: '**',               component: PageNotFoundComponent}
];
