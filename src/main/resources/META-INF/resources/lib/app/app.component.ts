import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

declare var Liferay: any;

@Component({
	template: `
	<h1>{{title}}</h1>
	<h1>{{test}}</h1>
	<h2>{{hero.name}} details!</h2>
	<div><label>id: </label>{{hero.id}}</div>
	<div>
		<label>name: </label>
		<input [(ngModel)]="hero.name" placeholder="name">
	</div>
	`,
})
export class AppComponent {
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
	title = Liferay.Language.get('javax.portlet.display-name.angulartest');
	test = Liferay.Language.get('test-key');
}