import { Repo } from './repo';
import { DatePipe } from '@angular/common';

describe('Repo', () => {
	it('should create an instance', () => {
		expect(new Repo('', '', '', '', '', new Date())).toBeTruthy();
	});
});
