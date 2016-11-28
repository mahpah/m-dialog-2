import { ModalContainer } from './dialog-container'

export function Modal() {
	return function (target) {
		Object.assign(target.prototype, ModalContainer.prototype)
	};
}
