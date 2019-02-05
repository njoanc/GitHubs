import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { UpperCasePipe } from '@angular/common';
import { checkAndUpdatePureExpressionDynamic } from '@angular/core/src/view/pure_expression';

@Component({
	selector: 'app-repository-form',
	templateUrl: './repository-form.component.html',
	styleUrls: [ './repository-form.component.css' ]
})
export class RepositoryFormComponent implements OnInit {
	Name = {
		name: ''
	};
	submitSearch(name) {
		console.log(this.Name);
		this.repositoryService.getRepositoryInfo(this.Name.name);
		this.repoService.getRepoInfo(this.Name.name);
	}
	constructor(private repositoryService: RepositoryService, private repoService: RepositoryService) {
		console.log(repoService);
	}
	ngOnInit() {}
}
