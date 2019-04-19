import { TextShadow } from './index';
import { ShadowedLabel as Common, textShadowProperty } from './shadowed-label.common';
import { layout } from 'tns-core-modules/utils/utils';

export class ShadowedLabel extends Common {
    [textShadowProperty.setNative](value: TextShadow) {
        console.dir(value);
        this.nativeViewProtected.setShadowLayer(
            layout.toDevicePixels(value.blurRadius),
            layout.toDevicePixels(value.offsetX),
            layout.toDevicePixels(value.offsetY),
            value.color.android
        );
    }
}
