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

	private username: string;
	items;
	constructor(private http: HttpClient) {
		console.log('service is now ready!');
		this.username = 'njoanc';
		this.user = new User(' ');
		this.repo = new Repo(' ', ' ', ' ', ' ', ' ', new Date());
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
			created_at: Date;
		}
		const promise = new Promise((resolve, reject) => {
			this.http
				.get<ApiResponse>('https://api.github.com/users/' + username + '?success_token=' + environment.apikey)
				.toPromise()
				.then((repository) => {
					this.username = repository.name;

					console.log(repository);
					resolve();
				});
		});
		return promise;
	}
	getRepoInfo(username) {
		interface ApiResponse {
			name: string;
			login: string;
			avatar_url: string;
			email: string;
			location: string;
			public_repos: number;
			html_url: string;
			created_at: Date;
		}

		this.http
			.get<ApiResponse>('https://api.github.com/users/' + username + '?success_token=' + environment.apikey)
			.subscribe((response) => {
				this.items = response;
			});
	}
}
