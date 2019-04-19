import { ShadowedLabel as ShadowedLabelDefinition, TextShadow } from './index';
import { Label } from 'tns-core-modules/ui/label/label';
import { CssProperty, Style } from 'tns-core-modules/ui/core/properties';
import { Color } from 'tns-core-modules/color/color';
// import { Length } from 'tns-core-modules/ui/styling/style-properties';
import { isIOS } from 'tns-core-modules/platform';
import { layout } from 'tns-core-modules/utils/utils';
import { dip } from 'tns-core-modules/ui/core/view';

export class ShadowedLabel extends Label implements ShadowedLabelDefinition {
    get textShadow() {
        return this.style.textShadow;
    }

    set textShadow(value: any) {
        this.style.textShadow = value;
    }
}

export const textShadowProperty = new CssProperty<Style, string | TextShadow>({
    name: 'textShadow',
    cssName: 'text-shadow',
    affectsLayout: isIOS,
    valueConverter: value => {
        const params = value.split(' ');
        return {
            offsetX: parseDIPs(params[0]),
            offsetY: parseDIPs(params[1]),
            blurRadius: parseDIPs(params[2]),
            color: new Color(params.slice(3).join(''))
        };
    }
});
textShadowProperty.register(Style);

// Augmenting Style definition so it includes our myOpacity property
declare module 'tns-core-modules/ui/styling/style' {
    interface Style {
        textShadow: string | TextShadow;
    }
}

function parseDIPs(value: string): dip {
    if (value.indexOf('px') !== -1) {
        return layout.toDeviceIndependentPixels(parseFloat(value.replace('px', '').trim()));
    } else {
        return parseFloat(value.replace('dip', '').trim());
    }
}
