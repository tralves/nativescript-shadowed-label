import { TextShadow } from './index';
import { ShadowedLabel as Common, textShadowProperty } from './shadowed-label.common';

export class ShadowedLabel extends Common {
    [textShadowProperty.setNative](value: TextShadow) {
        this.nativeTextViewProtected.shadowColor = value.color.ios;
        this.nativeTextViewProtected.shadowOffset = CGSizeMake(value.offsetX, value.offsetY);
        this.nativeTextViewProtected.shadowRadius = value.blurRadius;
        this.nativeTextViewProtected.shouldRasterize = true;
        this.nativeTextViewProtected.masksToBounds = false;
    }
}
