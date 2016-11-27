import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Components } from './components'
import { Services } from './services'

@NgModule({
	imports: [
		CommonModule,
	],

	providers: [
		Services,
	],

	declarations: [
		Components,
	],

	exports: [
		Components,
	],
})
export class MDialogModule {}
