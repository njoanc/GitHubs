import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RepositoryComponent } from '../repository/repository.component';
import { AboutComponent } from '../about/about.component';
import { NotFoundComponent } from '../not-found/not-found.component';

// Defining routes
const routes: Routes = [
	{ path: 'users', component: RepositoryComponent },
	{ path: 'about', component: AboutComponent },
	{ path: '', redirectTo: '/users', pathMatch: 'full' },
	{ path: 'users/:id', component: RepositoryComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [ CommonModule, RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	declarations: []
})
export class RoutingModule {}
