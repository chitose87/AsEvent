namespace pon87.event {
	/**
	 * @version 0.0.1
	 * @author chitose
	 */
	export class AsEvent {
		type: string;
		current: AsEventDispatcher;

		constructor(type: string) {
			this.type = type;
		}
	}
}
