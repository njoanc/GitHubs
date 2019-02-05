import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from '../environments/environment';
import { Repo } from './repo';

@Injectable({
	providedIn: 'root'
})
export class RepositoryService {
	repo: Repo;
	user: User;

	// private username: string;
	items;
	constructor(private http: HttpClient) {
		console.log('service is now ready!');
		// this.username = 'njoanc';
		this.user = new User(' ', ' ', ' ', ' ', ' ', 0, ' ');
		this.repo = new Repo(' ', ' ', ' ', ' ', ' ');
	}
	getRepositoryInfo(username) {
		interface ApiResponse {
			name: string;
			login: string;
			avatar_url: string;
			email: string;
			location: string;
			public_repos: number;
			html_url: string;
		}
		const promise = new Promise((resolve, reject) => {
			this.http.get<ApiResponse>(environment.apiUrl + username).toPromise().then((repository) => {
				this.user.name = repository.name;
				this.user.login = repository.login;
				this.user.avatar_url = repository.avatar_url;
				this.user.email = repository.email;
				this.user.location = repository.location;
				this.user.public_repos = repository.public_repos;
				this.user.html_url = repository.html_url;

				console.log(repository);
				resolve();
			});
		});
		return promise;
	}
	getRepoInfo(username) {
		interface ApiResponse {
			name: string;
			homepage: string;
			description: string;
			html_url: string;
			clone_url: string;
		}
		this.http.get<ApiResponse>(environment.apiUrl + username + environment.apikey).subscribe((response) => {
			this.items = response;
		});
	}
}
