import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { Repo } from '../repo';

@Component({
	selector: 'app-repository',
	templateUrl: './repository.component.html',
	providers: [ RepositoryService ],
	styleUrls: [ './repository.component.css' ]
})
export class RepositoryComponent implements OnInit {
	repo: Repo;

	constructor(private repositoryService: RepositoryService) {
		this.repo = this.repositoryService.repo;
	}
	ngOnInit() {
		// this.repo = this.repositoryService.repo;
	}
}
