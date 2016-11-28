import { Injector, ViewContainerRef, Compiler } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { DialogResult } from '../lib';
export declare class MDialogService {
    private compiler;
    activeInstances: number;
    private viewContainerRef;
    private injector;
    constructor(compiler: Compiler);
    registerViewContainerRef(vcr: ViewContainerRef): void;
    registerInjector(injector: Injector): void;
    create(module: any, component: any, parameters: Object): {
        componentRef: ReplaySubject<{}>;
        result: ReplaySubject<DialogResult>;
    };
    confirm(title: string, body: string, btnOkLabel?: string, btnCancelLabel?: string): {
        componentRef: ReplaySubject<{}>;
        result: ReplaySubject<DialogResult>;
    };
}
