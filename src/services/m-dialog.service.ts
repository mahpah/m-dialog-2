import {
	Injectable,
	Injector,
	ViewContainerRef,
	Compiler,
	ReflectiveInjector,
} from '@angular/core'
import { ReplaySubject } from 'rxjs/ReplaySubject'
import { DialogClosed, DialogDismissed, DialogResult } from '../lib'
import { MDialogModule } from '../m-dialog.module'
import { ConfirmDialogComponent } from '../components/confirm-dialog'

@Injectable()
export class MDialogService {
	public activeInstances = 0
	private viewContainerRef: ViewContainerRef
	private injector: Injector

	constructor(
		private compiler: Compiler,
	) {}

	registerViewContainerRef(vcr: ViewContainerRef) {
		this.viewContainerRef = vcr
	}

	registerInjector(injector: Injector) {
		this.injector = injector
	}

	create(
		module: any,
		component: any,
		parameters: Object,
	) {
		let componentRef$ = new ReplaySubject()
		let result$ = new ReplaySubject<DialogResult>()

		this.compiler.compileModuleAndAllComponentsAsync(module)
			.then(factory => {
				let componentFactory = factory.componentFactories
					.filter(it => it.componentType === component)[0]
				if (!componentFactory) {
					throw 'Cannot find dialog component. Make sure you\'ve declared one.'
				}
				const childInjector = ReflectiveInjector.resolveAndCreate([], this.injector)
				let componentRef = this.viewContainerRef
														.createComponent(componentFactory, 0, childInjector)
				this.activeInstances++

				const dismiss = () => {
					this.activeInstances--
					componentRef.destroy()
					result$.next(new DialogDismissed())
					result$.complete()
				}

				const close = data => {
					this.activeInstances--
					componentRef.destroy()
					let result = new DialogClosed(data)
					result$.next(result)
					result$.complete()
				}

				Object.assign(
					componentRef.instance,
					parameters,
					{dismiss, close},
				)

				componentRef$.next({
					componentRef,
				})
				componentRef$.complete()
			})

		return {
			componentRef: componentRef$,
			result: result$,
		}
	}

	confirm(
		title: string,
		body: string,
		btnOkLabel = 'Ok',
		btnCancelLabel = 'Cancel',
	) {
		let context = {
			title,
			body,
			btnOkLabel,
			btnCancelLabel,
		}

		return this.create(
			MDialogModule,
			ConfirmDialogComponent,
			context,
		)
	}
}
