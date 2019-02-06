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
		this.user = new User(' ');
		this.repo = new Repo(' ', ' ', ' ', '', ' ', 0, ' ', new Date());
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
				.get<ApiResponse>(
					'https://api.github.com/users/' +
						username +
						'?access_token=1945008b9bf8906de3636e18fdcd2dfe9d656b84'
				)
				.toPromise()
				.then((repository) => {
					this.repo.name = repository.name;
					this.repo.login = repository.login;
					this.repo.avatar_url = repository.avatar_url;
					this.repo.email = repository.email;
					this.repo.location = repository.location;
					this.repo.public_repos = repository.public_repos;
					this.repo.html_url = repository.html_url;
					this.repo.created_at = repository.created_at;

					// console.log(this.repo);
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
			.get<ApiResponse>(
				'https://api.github.com/users/' + username + '?access_token=1945008b9bf8906de3636e18fdcd2dfe9d656b84'
			)
			.subscribe((response) => {
				this.items = response;
			});
	}
}
