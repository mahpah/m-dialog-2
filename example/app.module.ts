import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { MyCustomModalComponent } from './components/custom-modal/custom-modal.component'
import { MDialogModule } from '../src'

@NgModule({
	imports: [
		BrowserModule,
		MDialogModule,
	],

	declarations: [
		AppComponent,
		MyCustomModalComponent,
	],

	entryComponents: [
		MyCustomModalComponent,
	],

	bootstrap: [
		AppComponent,
	],
})
export class AppModule {}
