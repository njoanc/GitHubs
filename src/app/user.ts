export class User {
	constructor(
		public name: string,
		public login: string,
		public avatar_url: string,
		public email: string,
		public location: string,
		public public_repos: number,
		public html_url: string
	) {}
}
