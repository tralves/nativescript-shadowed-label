import {
    ShadowedLabel as Common,
    textShadowProperty /*, TextShadow*/
} from './shadowed-label.common';

export class ShadowedLabel extends Common {
    constructor() {
        super();

        setTimeout(() => {
            console.dir(this);
            this.text = 'asasd';
        }, 2000);
    }

    [textShadowProperty.setNative](value: number) {
        console.dir(value);
        this.text = 'asasd111';
    }
}
