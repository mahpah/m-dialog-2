import { ModalContainer } from './dialog-container'

export function Dialog() {
	return function (target) {
		Object.assign(target.prototype, ModalContainer.prototype)
	};
}
