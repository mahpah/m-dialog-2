import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Components } from './components'
import { MDialogService } from './services'

@NgModule({
	imports: [
		CommonModule,
	],

	providers: [],

	declarations: [
		Components,
	],

	exports: [
		Components,
	],
})
export class MDialogModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: MDialogModule,
			providers: [
				MDialogService,
			],
		}
	}
}
