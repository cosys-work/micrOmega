import { Routes } from '@angular/router';

import { Authority } from 'app/config/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { errorRoute } from './layouts/error/error.route';

import HomeComponent from './home/home.component';
import NavbarComponent from './layouts/navbar/navbar.component';
import LoginComponent from './login/login.component';
import { loadEntityRoutes } from './core/microfrontend';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'home.title',
  },
  {
    path: '',
    component: NavbarComponent,
    outlet: 'navbar',
  },
  {
    path: 'admin',
    data: {
      authorities: [Authority.ADMIN],
    },
    canActivate: [UserRouteAccessService],
    loadChildren: () => import('./admin/admin.routes'),
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.route'),
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'login.title',
  },
  {
    path: '',
    loadChildren: () => import(`./entities/entity.routes`),
  },
  {
    path: 'patient',
    loadChildren: () => loadEntityRoutes('patient'),
  },
  {
    path: 'doctor',
    loadChildren: () => loadEntityRoutes('doctor'),
  },
  {
    path: 'staff',
    loadChildren: () => loadEntityRoutes('staff'),
  },
  {
    path: 'techlead',
    loadChildren: () => loadEntityRoutes('techlead'),
  },
  ...errorRoute,
];

export default routes;
