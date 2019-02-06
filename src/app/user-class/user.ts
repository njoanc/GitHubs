export class User {
	constructor(
		public name: string,
		public description: string,
		public html_url: string,
		public clone_url: string,
		public homepage: string,
		public created_at: Date,
		public avatar_url: string
	) {}
}
