/**
 *
 */
import {AsEventDispatcher} from "./AsEventDispatcher";

export class AsEvent {
    type: string;
    current: AsEventDispatcher;

    constructor(type: string) {
        this.type = type;
    }
}

