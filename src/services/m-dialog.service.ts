import {
	Injectable,
	Injector,
	ViewContainerRef,
	Compiler,
	ReflectiveInjector,
} from '@angular/core'
import { ReplaySubject } from 'rxjs/ReplaySubject'
import { ModalClosed, ModalDismissed } from '../lib'

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

	create(module: any, component: any, parameters: Object) {
		let componentRef$ = new ReplaySubject()
		let result$ = new ReplaySubject()

		this.compiler.compileModuleAndAllComponentsAsync(module)
			.then(factory => {
				let componentFactory = factory.componentFactories
					.filter(it => it.componentType === component)[0]
				const childInjector = ReflectiveInjector.resolveAndCreate([], this.injector)
				let componentRef = this.viewContainerRef
														.createComponent(componentFactory, 0, childInjector)
				this.activeInstances++

				const destroy = () => {
					this.activeInstances--
					componentRef.destroy()
					result$.next(new ModalDismissed())
					result$.complete()
				}

				const close = data => {
					this.activeInstances--
					componentRef.destroy()
					let result = new ModalClosed()
					result.data = data
					result$.next(result)
					result$.complete()
				}
				Object.assign(
					componentRef.instance,
					parameters,
					{destroy, close},
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
}
