import { Component } from '@angular/core'
import { MDialogService, ModalDismissed, ModalClosed } from '../src'
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

	constructor(
		private dialog: MDialogService,
	) {}

	open() {
		let dialog = this.dialog.create(AppModule, MyCustomModalComponent, {
			foo: 'bar',
		})

		dialog.result.subscribe((result) => {
			this.dialogRes = {
				close: result instanceof ModalClosed,
				dismiss: result instanceof ModalDismissed,
			}

			if (result instanceof ModalClosed) {
				this.dialogResData = result.data
			}
		})
	}
}
