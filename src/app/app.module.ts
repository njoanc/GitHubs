import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { RepositoryService } from './repository.service';

import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryFormComponent } from './repository-form/repository-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
// Defining routes
const routes: Routes = [
	{ path: 'users', component: RepositoryComponent }
	// {path:"about",component:AboutComponent}
];
@NgModule({
	declarations: [ AppComponent, RepositoryComponent, RepositoryFormComponent, NotFoundComponent ],
	imports: [ BrowserModule, HttpClientModule, RouterModule.forRoot(routes) ],
	// providers: [ RepositoryService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
