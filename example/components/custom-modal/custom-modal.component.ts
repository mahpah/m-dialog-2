import { Component, Input } from '@angular/core'
import { Modal } from '../../../src'

@Component({
	selector: 'my-custom-modal',
	templateUrl: './custom-modal.component.jade',
})
@Modal()
export class MyCustomModalComponent {
	@Input() foo
}
