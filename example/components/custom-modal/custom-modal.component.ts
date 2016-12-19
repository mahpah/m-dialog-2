import { Component, Input } from '@angular/core'
import { Dialog } from '../../../src'

@Component({
	selector: 'custom-modal',
	templateUrl: './custom-modal.component.jade',
})
@Dialog()
export class MyCustomModalComponent {
	@Input() foo
}
