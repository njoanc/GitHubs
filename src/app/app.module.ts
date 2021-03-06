import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryFormComponent } from './repository-form/repository-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { DateCountPipe } from './date-count.pipe';
import { AboutComponent } from './about/about.component';
// import { from } from 'rxjs';
// Defining routes
const routes: Routes = [
	{
		path: 'users',
		component: RepositoryComponent
	},
	{ path: '', redirectTo: '/users', pathMatch: 'full' },
	{ path: '**', component: NotFoundComponent }
];
@NgModule({
	declarations: [
		AppComponent,
		RepositoryComponent,
		AboutComponent,
		RepositoryFormComponent,
		NotFoundComponent,
		DateCountPipe
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		RoutingModule,
		RouterModule.forRoot([
			{
				path: 'users',
				component: RepositoryComponent
			}
			// 	// {path:"about",component:AboutComponent}
		])
	],
	// providers: [ RepositoryService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
