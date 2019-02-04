import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RepositoryService } from './repository.service';

import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryFormComponent } from './repository-form/repository-form.component';

@NgModule({
	declarations: [ AppComponent, RepositoryComponent, RepositoryFormComponent ],
	imports: [ BrowserModule, HttpClientModule ],
	providers: [ RepositoryService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
