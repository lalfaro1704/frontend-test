import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

const router: Routes = [
    { path: '', component: HomeComponent },
    { path: 'menu/:id', component: MenuComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const appRouters: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(router);
