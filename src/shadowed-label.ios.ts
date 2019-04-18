import { ShadowedLabel as Common, textShadowProperty, TextShadow } from './shadowed-label.common';

export class ShadowedLabel extends Common {
    constructor() {
        super();
    }

    [textShadowProperty.setNative](value: TextShadow) {
        setTimeout(() => {
            console.dir(value);
            this.text = value.color.name;
        }, 2000);
    }
}
