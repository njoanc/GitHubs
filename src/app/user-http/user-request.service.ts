import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';

@Injectable({
	providedIn: 'root'
})
export class UserRequestService {
	user: User;
	constructor(private http: HttpClient) {
		this.user = new User('', '', '', '', '', new Date(), '');
	}
	userRequest() {
		interface ApiResponse {
			name: string;
			description: string;
			html_url: string;
			clone_url: string;
			homepage: string;
			created_at: Date;
		}
		let promise = new Promise((resolve, reject) => {
			this.http
				.get<ApiResponse>(
					'https://api.github.com/users/' + +'?access_token=4e506891c065d69bf641bbe51727e32d407658e2'
				)
				.toPromise()
				.then(
					(response) => {
						this.user.name = response.name;
						this.user.description = response.description;
						this.user.html_url = response.html_url;
						this.user.clone_url = response.clone_url;
						this.user.homepage = response.homepage;
						this.user.created_at = response.created_at;

						resolve();
					},
					(error) => {
						this.user.name = '';
						this.user.description = '';
						this.user.html_url;
						this.user.clone_url = '';
						this.user.homepage = '';
						this.user.created_at = new Date();
						reject(error);
					}
				);
		});

		return promise;
	}
}
