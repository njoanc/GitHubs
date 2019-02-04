import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { User } from '../user';

@Component({
	selector: 'app-repository',
	templateUrl: './repository.component.html',
	styleUrls: [ './repository.component.css' ],
	providers: [ RepositoryService ]
})
export class RepositoryComponent implements OnInit {
	user: User;

	constructor(private repositoryService: 'RepositoryService', public repoService: 'RepositoryService') {
		//  this.user = this.repositoryService.user;...work of tomorrow start on this
	}
	ngOnInit() {
		// this.user = this.repositoryService.user;
	}
}
