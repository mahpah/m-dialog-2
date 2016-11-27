import {
	Component,
	ViewContainerRef,
	Injector,
	ViewChild,
} from '@angular/core'
import { MDialogService } from '../../services'

@Component({
	selector: 'dialog-placeholder',
	templateUrl: './dialog-placeholder.component.jade',
	styleUrls: ['./dialog-placeholder.component.scss'],
})
export class DialogPlaceholderComponent {
	@ViewChild('container', {read: ViewContainerRef}) viewContainer: ViewContainerRef

	constructor(
		private injector: Injector,
		private mDialog: MDialogService,
		private viewRef: ViewContainerRef,
	) {
		console.log(this.viewRef, this.viewContainer)
		this.mDialog.registerInjector(this.injector)
	}

	get instanceCount() {
		return this.mDialog.activeInstances
	}

	ngAfterViewInit() {
		this.mDialog.registerViewContainerRef(this.viewContainer)
	}
}
