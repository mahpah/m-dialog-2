export class ModalContainer {
	destroy: Function
	close: Function

	dismiss(): void {
		this.destroy()
	}
}
