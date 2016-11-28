import { Component } from '@angular/core'
import { MDialogService, DialogDismissed, DialogClosed } from '../src'
import { AppModule } from './app.module'
import { MyCustomModalComponent } from './components/custom-modal/custom-modal.component';

@Component({
	selector: 'app',
	providers: [  ],
	styleUrls: ['./app.component.scss'],
	templateUrl: './app.component.jade',
})
export class AppComponent {
	private dialogRes
	private dialogResData
	private confirmed

	constructor(
		private dialog: MDialogService,
	) {}

	open() {
		let dialog = this.dialog.create(AppModule, MyCustomModalComponent, {
			foo: 'bar',
		})

		dialog.result.subscribe((result) => {
			this.dialogRes = {
				close: result instanceof DialogClosed,
				dismiss: result instanceof DialogDismissed,
			}

			if (result instanceof DialogClosed) {
				this.dialogResData = result.data
			}
		})
	}

	confirm() {
		let confirmModal = this.dialog.confirm(
			'Are you sure?',
			'Delete me?'
		)

		confirmModal.result.subscribe(response => {
			this.confirmed = response.data
		})
	}
}
