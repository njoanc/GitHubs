import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { Repo } from '../repo';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';
// import { UserRequestService } from '../../user-request.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-repository',
	templateUrl: './repository.component.html',
	providers: [ RepositoryService ],
	styleUrls: [ './repository.component.css' ]
})
export class RepositoryComponent implements OnInit {
	repo: Repo;
	user: any;

	constructor(private repositoryService: RepositoryService, private http: HttpClient) {
		this.repo = this.repositoryService.repo;
		this.user = this.repositoryService.user;
	}
	ngOnInit() {
		interface ApiResponse {
			name: string;
			description: string;
			html_url: string;
			clone_url: string;
			homepage: string;
			created_at: Date;
		}
		this.http.get('https://api.github.com/users/njoanc?access_token').subscribe((data: any) => {
			this.user = new User(
				data.name,
				data.description,
				data.html_url,
				data.clone_url,
				data.homepage,
				data.created_at
			);
		});
	}
}
