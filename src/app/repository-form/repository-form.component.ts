import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';

@Component({
	selector: 'app-repository-form',
	templateUrl: './repository-form.component.html',
	styleUrls: [ './repository-form.component.css' ],
	providers: [ RepositoryService ]
})
export class RepositoryFormComponent implements OnInit {
	submitSearch(name) {
		this.repositoryService.getRepositoryInfo(name.target.value);
		this.repoService.getRepoInfo(name.target.value);
	}
	constructor(private repositoryService: RepositoryService, private repoService: RepositoryService) {}
	ngOnInit() {}
}
