export abstract class DialogResult {
	abstract type: string
	abstract data: any
}

export class DialogClosed extends DialogResult {
	type: 'closed'

	constructor(public data: any) {
		super()
	}
}

export class DialogDismissed extends DialogResult {
	type: 'dismissed'
	data: any
}
