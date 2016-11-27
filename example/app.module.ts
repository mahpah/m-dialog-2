import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { MDialogModule } from '../src'

@NgModule({
	imports: [
		BrowserModule,
		MDialogModule,
	],

	declarations: [
		AppComponent,
	],

	bootstrap: [
		AppComponent,
	],
})
export class AppModule {}
