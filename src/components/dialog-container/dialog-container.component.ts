import {
	Component,
	trigger,
	transition,
	style,
	animate,
	state,
} from '@angular/core'

@Component({
	selector: 'dialog-container',
	providers: [  ],
	styleUrls: ['./dialog-container.component.scss'],
	templateUrl: './dialog-container.component.jade',
	animations: [
		trigger('fade', [
			state('void', style({ opacity: 0 })),
			state('*', style({ opacity: 1 })),
			transition(':enter', animate(200)),
			transition(':leave', animate(200)),
		]),

		trigger('slideDown', [
			state('void', style({
				transform: 'translateY(-100%)',
				opcity: 0,
			})),
			state('*', style({
				transform: 'translateY(0)',
				opacity: 1,
			})),
			transition(':enter', animate(200)),
			transition(':leave', animate(200)),
		]),
	],
})
export class DialogContainerComponent {}
