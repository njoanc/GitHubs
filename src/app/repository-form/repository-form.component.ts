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
	submitSearch(name) {
		this.repositoryService.getRepositoryInfo(name.target.value);
		this.repoService.getRepoInfo(name.target.value);
	}
	constructor(private repositoryService: RepositoryService, private repoService: RepositoryService) {}
	ngOnInit() {}
}
