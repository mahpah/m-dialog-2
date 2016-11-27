export abstract class ModalResult {
	abstract type: string
}

export class ModalClosed extends ModalResult {
	type: 'closed'
	data: any
}

export class ModalDismissed extends ModalResult {
	type: 'dismissed'
	data: any
}
